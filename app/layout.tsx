import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Providers from "./providers";
import Cart from "./components/Cart/Cart";

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
          <Header />
          {children}
          <Footer />
          {/* <div className="max-w-[1110px] mx-auto relative"> */}
            <Cart />
          {/* </div> */}
        </Providers>
      </body>
    </html>
  );
}
