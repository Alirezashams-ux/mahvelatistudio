import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: {
    default: "Alireza Mahvelati Shamsabadi",
    template: "%s | Mahvelati Studio",
  },

  description:
    "Industrial AI, Trustworthy AI, AI for Physical Systems, Environmental AI, and Scientific Machine Learning.",

  authors: [
    {
      name: "Alireza Mahvelati Shamsabadi",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
