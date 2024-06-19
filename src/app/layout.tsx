import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter( { subsets: ["latin"] } );

export const metadata: Metadata = {
  title: "Tune Tutor",
  description: "Explore a wide range of musical courses and resources dedicated to fostering musical creativity and understanding.",
};

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div>
          <NavBar></NavBar>
        </div>
        <div>
          {children}
        </div>
        <div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
