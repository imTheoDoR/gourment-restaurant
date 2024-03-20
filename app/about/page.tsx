import AboutUs from "@/components/about/about-us";
import Header from "@/components/header";

export default function AboutPage() {
  return (
    <main>
      <Header
        title="about gourmet"
        description="we take pride in our passion for culinary artistry and unparalleled hospitality."
      />

      <AboutUs />
    </main>
  );
}
