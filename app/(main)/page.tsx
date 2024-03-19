import BestDeal from "@/components/homepage/best-deal";
import Discover from "@/components/homepage/discover";
import ExploreMenu from "@/components/homepage/explore-menu/explore-menu";
import MainHeader from "@/components/homepage/main-header";
import MeetWithChef from "@/components/homepage/meet/meet-container";
import ReservationWrapper from "@/components/homepage/reservation/reservation-wrapper";
import TestimonialWrapper from "@/components/homepage/testimonial/testimonial-wrapper";
import UnforgettableWrapp from "@/components/homepage/unforgettable/unf-wrapper";
import WhyUs from "@/components/homepage/why/why-us";

export default function Home() {
  return (
    <main>
      <MainHeader />
      <Discover />
      <section className="container pt-40 pb-32">
        <BestDeal />
      </section>
      <ExploreMenu />
      <MeetWithChef />
      <WhyUs />
      <UnforgettableWrapp />
      <TestimonialWrapper />
      <ReservationWrapper />
    </main>
  );
}
