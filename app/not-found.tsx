import NotFound from "@/components/404";
import Header from "@/components/header";

export default function NotFoundPage() {
  return (
    <main>
      <Header
        className="bg-hero !h-screen place-self-center"
        component={<NotFound />}
      />
    </main>
  );
}
