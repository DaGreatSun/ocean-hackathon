"use client";
import { Row, Col } from "@components/CustomComponents";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import { Avatar, Button, Dropdown, Menu } from "react-daisyui";
import { GiBoatFishing } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import {
  IoBoat,
  IoHomeOutline,
  IoLogOutOutline,
  IoNotificationsOutline,
  IoPersonCircle,
} from "react-icons/io5";
import { MdArrowDropDown, MdKayaking, MdMenu } from "react-icons/md";

function Header(props) {
  /***************************************************************************************/
  //States
  /***************************************************************************************/

  /***************************************************************************************/
  //Var
  /***************************************************************************************/

  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/
  function navButton(name, path) {
    return (
      <Link href={path ?? ""}>
        <Button className="h-20 w-32 rounded-none border-0 bg-opacity-0 text-lg font-normal text-black hover:bg-gray-200">
          <Link href={path ?? ""}>{name}</Link>
        </Button>
      </Link>
    );
  }

  React.useEffect(() => {}, []);

  return (
    <div className="flex h-20 w-full items-center justify-between border border-b-gray-300 bg-white bg-opacity-95 px-10">
      <div className="w items-center text-xl">Welcome</div>
      <div>
        <Row totalCol={4} style={"h-20 items-center gap-0 text-xl"}>
          <Col colSize={1} style={"h-20 items-center"}>
            {navButton("HOME", "/home")}
          </Col>
          <Col colSize={1} style={"h-20 items-center"}>
            {navButton("ABOUT US", "/home/about")}
          </Col>
          <Col colSize={1} style={"h-20 items-center"}>
            {navButton("DATA", "/home/data")}
          </Col>
          <Col colSize={1} style={"h-20 items-center"}>
            {navButton("SIGN IN", "/login")}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
