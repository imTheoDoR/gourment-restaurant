import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import ComingSoon from "@/components/coming-soon";

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
  // enable/disable coming soon
  const comingSoon = true;

  return (
    <html lang="en">
      <body className={font.className}>
        {comingSoon ? (
          <ComingSoon />
        ) : (
          <>
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
