import PackageOverview from "../../../components/playground/PackageOverview";
import { playgroundPackages } from "../../../components/playground/packageData";

export default function PlaygroundAuthPage() {
  return <PackageOverview item={playgroundPackages.auth} />;
}
