import BestDeal from "@/components/best-deal";
import Discover from "@/components/discover";
import ExploreMenu from "@/components/explore-menu/explore-menu";
import MeetWithChef from "@/components/meet/meet-container";

export default function Home() {
  return (
    <main>
      <Discover />
      <div className="container pt-40 pb-32">
        <BestDeal />
      </div>
      <ExploreMenu />
      <MeetWithChef />
    </main>
  );
}
