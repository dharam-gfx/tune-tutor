import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBAr from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tune Tutor",
  description: "Explore a wide range of musical courses and resources dedicated to fostering musical creativity and understanding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div>
          <NavBAr></NavBAr>
        </div>
        {children}
        </body>
    </html>
  );
}
