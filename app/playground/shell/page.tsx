import PackageOverview from "../../../components/playground/PackageOverview";
import { playgroundPackages } from "../../../components/playground/packageData";

export default function PlaygroundShellPage() {
  return <PackageOverview item={playgroundPackages.shell} />;
}
