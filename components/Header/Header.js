"use client";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import { Button, Dropdown } from "react-daisyui";
import { IoPersonCircle } from "react-icons/io5";
import { MdArrowDropDown, MdMenu } from "react-icons/md";

function Header(props) {
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
    <div className="flex h-16 w-full items-center justify-between bg-white px-5">
      <div>
        <MdMenu className="h-6 w-6 sm:hidden " />
      </div>
      <div className="flex">
        <div className="mr-3 flex items-center text-base font-medium">
          {/* <IoPersonCircle className="w-9 h-9 mr-3" /> */}
          Welcome, {userObj.name}
        </div>
        <div className="dropdown dropdown-end z-[999]">
          <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
            <div className="flex w-10 items-center rounded-full">
              <MdArrowDropDown className="m-auto mt-1 h-8 w-8" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu-normal menu dropdown-content rounded-box mt-3 w-56 bg-base-100 p-2 text-sm shadow"
          >
            <li>
              <a className="text-sm">Profile</a>
            </li>
            <li>
              <a className="justify-between text-sm">
                Settings{" "}
                <span className="badge badge-primary text-sm">Pending</span>
              </a>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  userObj.token = null;
                  localStorage.setItem("userObject", JSON.stringify(userObj));

                  Router.push("/auth/login");
                }}
                className="text-sm"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
