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
      <body className={twMerge(roboto.className, "h-screen bg-gray-100")}>
        <img
          src={"/assets/img/top.jpg"}
          sizes="100vw"
          style={{
            objectFit: "cover",
            width: "100%",
            height: 250,
          }}
          alt=""
        />
        <div className="relative z-10 -mt-10 sm:mx-0 md:mx-[5%]">
          {children}
        </div>
      </body>
    </html>
  );
}
