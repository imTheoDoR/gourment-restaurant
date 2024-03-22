import FAQWrapper from "@/components/faq/faq-wrapper";
import Header from "@/components/header";
import ReservationWrapper from "@/components/homepage/reservation/reservation-wrapper";

export default function FaqPage() {
  return (
    <main>
      <Header
        title="frequently questions"
        description="(faq) - gourment restaurant"
        className="bg-faq"
      />

      <FAQWrapper />
      <ReservationWrapper />
    </main>
  );
}
