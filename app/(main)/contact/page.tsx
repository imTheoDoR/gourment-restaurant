import ContactForm from "@/components/contact/contact-form";
import GetInTouch from "@/components/contact/get-in-touch";
import Header from "@/components/header";

export default function ContactPage() {
  return (
    <main className="bg-white2/50">
      <Header className="bg-contact !min-h-[600px] !bg-bottom" />

      <ContactForm />
      <GetInTouch />
    </main>
  );
}
