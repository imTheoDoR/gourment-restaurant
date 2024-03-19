import BestDeal from "@/components/best-deal";
import Discover from "@/components/discover";
import ExploreMenu from "@/components/explore-menu/explore-menu";
import MeetWithChef from "@/components/meet/meet-container";
import ReservationWrapper from "@/components/reservation/reservation-wrapper";
import TestimonialWrapper from "@/components/testimonial/testimonial-wrapper";
import UnforgettableWrapp from "@/components/unforgettable/unf-wrapper";
import WhyUs from "@/components/why/why-us";

export default function Home() {
  return (
    <main>
      <Discover />
      <section className="container pt-40 pb-32">
        <BestDeal />
      </section>
      <ExploreMenu />
      <MeetWithChef />
      {/* <WhyUs /> */}
      {/* <UnforgettableWrapp /> */}
      {/* <TestimonialWrapper /> */}
      {/* <ReservationWrapper /> */}
      <div className="pt-48"></div>
    </main>
  );
}
