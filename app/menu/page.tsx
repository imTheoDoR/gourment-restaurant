import Header from "@/components/header";
import OurMenu from "@/components/menu/our-menu";
import PDFMenu from "@/components/menu/pdf-menu";
import Preparation from "@/components/menu/preparation";

export default function MenuPage() {
  return (
    <main>
      <Header
        title="our special dishes"
        description="discover our culinary creations"
        background="bg-menubg"
      />

      <OurMenu />
      <Preparation />
      <PDFMenu />
    </main>
  );
}
