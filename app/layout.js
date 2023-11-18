import { Roboto } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import LayoutTemplate from "@components/Layout/LayoutTemplate";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Ocean Hackathon",
  description: "Ocean Hackathon",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={twMerge(roboto.className, "h-screen bg-[#e3fdfd]")}>
        {children}
      </body>
    </html>
  );
}
