import AboutUs from "@/components/about/about-us";
import OurPhilosophy from "@/components/about/our-philosophy";
import Header from "@/components/header";

export default function AboutPage() {
  return (
    <main>
      <Header
        title="about gourmet"
        description="we take pride in our passion for culinary artistry and unparalleled hospitality."
      />

      <AboutUs />
      <OurPhilosophy />
    </main>
  );
}
