import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer/footer.js";
import Nav from "../components/nav/nav";
import HeroBanner from "../components/hero-banner/hero-banner.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daniel Atoche-Juarez Web Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white-800 text-slate-900 flex min-h-screen flex-col min-w-screen`}
      >
        <div className="flex-1">
          <Nav />
          <HeroBanner />
          {children}
        </div>
        <Footer className="mt-auto" />
      </body>
    </html>
  );
}
