"use client";
import { Row, Col } from "@components/CustomComponents";
import Header from "@components/Header/Header";
import LayoutTemplate from "@components/Layout/LayoutTemplate";
import BusinessOwnerNavigation from "@components/Navigation/BusinessOwnerNavigation";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function DashboardLayout({ children }) {
  return (
    <LayoutTemplate>
      <Header name={"Business Owner"} />
      <div className="bg-white bg-opacity-70 p-3">
        <h1 className="text-center text-xl font-bold">Activities</h1>
        <BusinessOwnerNavigation />
        <hr style={{ marginBottom: 30 }} />
        {children}
      </div>
    </LayoutTemplate>
  );
}
