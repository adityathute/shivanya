"use client";

import Link from "next/link";

export default function PlaygroundHomeLink() {
  const handleClick = () => {
    window.history.scrollRestoration = "manual";

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    document
      .querySelectorAll<HTMLElement>(
        ".sdk-playground-main, .sdk-playground, main",
      )
      .forEach((element) => {
        element.scrollTop = 0;
      });
  };

  return (
    <Link href="/" scroll={false} onClick={handleClick}>
      Home
    </Link>
  );
}