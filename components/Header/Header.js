import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import { Button, Dropdown } from "react-daisyui";
import { IoPersonCircle } from "react-icons/io5";
import { MdArrowDropDown, MdMenu } from "react-icons/md";

function Header() {
  /***************************************************************************************/
  //States
  /***************************************************************************************/
  const [userObj, setUserObj] = React.useState({});

  /***************************************************************************************/
  //Var
  /***************************************************************************************/

  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/
  React.useEffect(() => {
    var obj = JSON.parse(localStorage.getItem("userObject"));
    if (!obj) {
      obj = {};
    }
    setUserObj(obj);
  }, []);

  return (
    <div className="w-full h-16 bg-white flex justify-between items-center px-5">
      <div>
        <MdMenu className="w-6 h-6 sm:hidden " />
      </div>
      <div className="flex">
        <div className="flex items-center text-base font-medium mr-3">
          {/* <IoPersonCircle className="w-9 h-9 mr-3" /> */}
          Welcome,{" "}
          {userObj.firstName ?? userObj.lastName ?? userObj.name ?? "-"}
        </div>
        <div className="dropdown dropdown-end z-[999]">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full flex items-center">
              <MdArrowDropDown className="w-8 h-8 m-auto mt-1" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-normal dropdown-content bg-base-100 rounded-box w-56 text-sm"
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
