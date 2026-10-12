import PackageOverview from "../../../components/playground/PackageOverview";
import { playgroundPackages } from "../../../components/playground/packageData";

export default function PlaygroundAIPage() {
  return <PackageOverview item={playgroundPackages.ai} />;
}
