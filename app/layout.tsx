import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Providers from "./providers";
import Cart from "./components/Cart/Cart";
import NextTopLoader from "nextjs-toploader";
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Music for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Providers>
          <NextTopLoader color="#d87d4a" height={1}/>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
