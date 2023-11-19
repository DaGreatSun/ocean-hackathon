"use client";
import { Row, Col } from "@components/CustomComponents";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import { Avatar, Button, Dropdown, Menu } from "react-daisyui";
import { FaBook, FaPerson } from "react-icons/fa6";
import { GiBoatFishing } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import {
  IoBoat,
  IoBusiness,
  IoHomeOutline,
  IoLogOutOutline,
  IoNotificationsOutline,
  IoPersonCircle,
} from "react-icons/io5";
import { MdArrowDropDown, MdKayaking, MdMenu, MdReviews } from "react-icons/md";

function AdminHeader(props) {
  /***************************************************************************************/
  //States
  /***************************************************************************************/
  const [userObj, setUserObj] = React.useState({ name: "" });

  /***************************************************************************************/
  //Var
  /***************************************************************************************/

  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/
  React.useEffect(() => {
    if ("name" in props) {
      var userObj_ = { ...userObj };
      userObj_.name = props.name;
      setUserObj(userObj_);
    }
  }, []);

  return (
    <div className="flex h-20 w-full items-center justify-between border border-b-gray-300 bg-white bg-opacity-95 px-10">
      <div className="flex">
        <div className="dropdown dropdown-end z-[999]">
          <label
            tabIndex={0}
            className="mr-3 flex items-center text-base font-medium"
          >
            <Avatar src="/icon.png" shape="circle" className="mr-3" size={40} />
            Welcome, {userObj.name}
          </label>
          <ul
            tabIndex={0}
            className="menu-normal menu dropdown-content rounded-box mt-3 w-56 bg-white p-2 text-sm shadow"
          >
            <li>
              <a className="text-sm">Profile</a>
            </li>
            <li>
              <a className="justify-between text-sm">Settings</a>
            </li>
            <li>
              <Link href={"/home"}>
                <button className="text-sm">Sign Out</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Row totalCol={3} style={"gap-12"}>
          <Col colSize={1}>
            <Link href={"/admin"}>
              <IoHomeOutline size={24} />
            </Link>
          </Col>
          <Col colSize={1}>
            <div className="dropdown dropdown-end z-[999]">
              <IoNotificationsOutline size={24} tabIndex={1} />
              <ul
                tabIndex={1}
                className="dropdown-content rounded-box mt-3 w-80 bg-white text-sm shadow"
              >
                <li>
                  <div className="py-3 text-center font-bold">
                    <h6 className="text-muted m-0 text-sm">
                      You have<span className="text-info">{" 8 "}</span>
                      notifications.
                    </h6>
                  </div>
                </li>
                <li>
                  <hr />
                </li>
                <li>
                  <Menu className="m-0 p-0">
                    <Menu.Item className="rounded-none">
                      <a>
                        <FaPerson className="h-6 w-6" /> Afiq has registered to
                        become a merchant
                      </a>
                    </Menu.Item>
                    <Menu.Item className="rounded-none">
                      <a>
                        <FaBook className="h-6 w-6" /> 14 Reviews has been
                        flagged as innapropriate
                      </a>
                    </Menu.Item>
                    <Menu.Item className="rounded-none">
                      <a>
                        <IoBusiness className="h-6 w-6" /> A new business has
                        been approved
                      </a>
                    </Menu.Item>
                  </Menu>
                </li>
                <li>
                  <hr />
                </li>
                <li>
                  <a className="hover:cursor-pointer">
                    <div className="py-3 text-center font-bold text-info">
                      View all
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col colSize={1}>
            <Link href={"/home"}>
              <IoLogOutOutline size={24} />
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AdminHeader;
