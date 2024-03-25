import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Gourmet Restaurant",
  description: "Gourmet Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
