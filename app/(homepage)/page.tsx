import BestDeal from "@/components/best-deal";
import Discover from "@/components/discover";

export default function Home() {
  return (
    <main>
      <Discover />
      <div className="container pt-40 pb-32">
        <BestDeal />
      </div>
    </main>
  );
}
