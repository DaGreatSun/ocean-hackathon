"use client";
import { Row, Col } from "@components/CustomComponents";
import AdminHeader from "@components/Header/AdminHeader";
import LayoutTemplate from "@components/Layout/LayoutTemplate";
import AdminNavigation from "@components/Navigation/AdminNavigation";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function DashboardLayout({ children }) {
  return (
    <LayoutTemplate>
      <AdminHeader name={"Admin"} />
      <div className="bg-white bg-opacity-70 p-3">
        <AdminNavigation />
        <hr style={{ marginBottom: 30 }} />
        {children}
      </div>
    </LayoutTemplate>
  );
}
