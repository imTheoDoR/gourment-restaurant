import Header from "@/components/header";
import ReservationWrapper from "@/components/homepage/reservation/reservation-wrapper";
import ChefTestimonial from "@/components/meet/chef-testimonial";
import OurTeam from "@/components/meet/our-team";

export default function MeetPage() {
  return (
    <main>
      <Header
        title="meet our chefs"
        description="discover our team"
        background="bg-meetchefs"
      />

      <OurTeam />
      <ChefTestimonial />
      <ReservationWrapper />
    </main>
  );
}
