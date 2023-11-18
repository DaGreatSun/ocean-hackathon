"use client";
import React from "react";
import { redirect } from "next/navigation";
import { Row, Col } from "@components/CustomComponents";
import { Card, Modal, Button } from "react-daisyui";
import Router from "next/router";
import Home from "./home/page";

export default function Landing() {
  React.useEffect(() => {
    redirect("/home");
  }, []);

  return <div />;
}
