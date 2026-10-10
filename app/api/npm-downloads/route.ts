import { NextResponse } from "next/server";

export const revalidate = 3600;

const packages = [
  "shivanya-ui",
  "shivanya-shell",
  "shivanya-core",
  "shivanya-ai",
  "shivanya-auth",
];

export async function GET() {
  const results = await Promise.allSettled(
    packages.map(async (name) => {
      const response = await fetch(
        `https://api.npmjs.org/downloads/point/last-week/${name}`,
        {
          next: { revalidate: 3600 },
        }
      );

      if (!response.ok) {
        throw new Error(`npm API returned ${response.status} for ${name}`);
      }

      const data = await response.json();

      if (typeof data.downloads !== "number") {
        throw new Error(`Invalid download count for ${name}`);
      }

      return data.downloads;
    })
  );

  const successfulResults = results.filter(
    (result): result is PromiseFulfilledResult<number> =>
      result.status === "fulfilled"
  );

  if (successfulResults.length === 0) {
    return NextResponse.json(
      { error: "Download statistics are temporarily unavailable." },
      { status: 503 }
    );
  }

  const downloads = successfulResults.reduce(
    (total, result) => total + result.value,
    0
  );

  return NextResponse.json(
    {
      downloads,
      availablePackages: successfulResults.length,
      totalPackages: packages.length,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}