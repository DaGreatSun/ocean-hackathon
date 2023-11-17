"use client";
import Header from "@components/Header/Header";
import BusinessOwnerNavigation from "@components/Navigation/BusinessOwnerNavigation";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function DashboardLayout({ children }) {
  return (
    <>
      <Header name={"HEHEHE"} />
      <div className="bg-white bg-opacity-40 p-3">
        <BusinessOwnerNavigation />
        {children}
      </div>
    </>
  );
}
