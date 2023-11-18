"use client";
import { Row, Col } from "@components/CustomComponents";
import Link from "next/link";
import Router from "next/navigation";
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
        <Button className="h-10 w-full rounded-none border-0 bg-opacity-0 text-lg font-normal text-black hover:bg-gray-200 lg:h-20 lg:w-32">
          {name}
        </Button>
      </Link>
    );
  }

  React.useEffect(() => {}, []);

  return (
    <div className="w-full items-center border border-b-gray-300 bg-white bg-opacity-95 lg:flex lg:justify-between lg:px-10">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <Col colSize={1} style={" items-center"}>
            {navButton("HOME", "/home")}
          </Col>
          <Col colSize={1} style={"items-center"}>
            {navButton("ABOUT US", "/home/about")}
          </Col>
          <Col colSize={1} style={"items-center"}>
            {navButton("DATA", "/home/data")}
          </Col>
          <Col colSize={1} style={"items-center"}>
            {navButton("SIGN IN", "/login")}
          </Col>
        </div>
      </div>
    </div>
  );
}

export default Header;
