import { Roboto } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { twMerge } from "tailwind-merge";

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
      <body className={twMerge(roboto.className, "h-screen bg-[#F0FFED]")}>
        {children}
      </body>
    </html>
  );
}
