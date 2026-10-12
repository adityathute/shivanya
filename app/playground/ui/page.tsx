import PackageOverview from "../../../components/playground/PackageOverview";
import { playgroundPackages } from "../../../components/playground/packageData";

export default function PlaygroundUIPage() {
  return <PackageOverview item={playgroundPackages.ui} />;
}
