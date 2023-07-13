import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer/footer.js";
import NavBar from "@/components/navbar/navbar";
import Nav from "@/components/navbar/nav";

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
          {/* <NavBar /> */}
          <Nav />
          {children}
        </div>
        <Footer className="mt-auto" />
      </body>
    </html>
  );
}
