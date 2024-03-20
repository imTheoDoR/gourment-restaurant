import AboutUs from "@/components/about/about-us";
import OurChefs from "@/components/about/our-chefs";
import OurPhilosophy from "@/components/about/our-philosophy";
import OurValues from "@/components/about/our-values";
import Header from "@/components/header";

export default function AboutPage() {
  return (
    <main>
      <Header
        title="about gourmet"
        description="we take pride in our passion for culinary artistry and unparalleled hospitality."
        background="bg-about"
      />

      <AboutUs />
      <OurPhilosophy />
      <OurValues />
      <OurChefs />
    </main>
  );
}
