import PackageOverview from "../../../components/playground/PackageOverview";
import { playgroundPackages } from "../../../components/playground/packageData";

export default function PlaygroundCorePage() {
  return <PackageOverview item={playgroundPackages.core} />;
}
