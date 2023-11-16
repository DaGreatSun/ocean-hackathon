import Router from "next/router";
import { httpPost } from "@helpers/httpClient/httpClient";
import CONST from "@constants/constant";

export function checkSession(layoutType) {
  try {
    var userObject = JSON.parse(localStorage.getItem("userObject"));
    var email = userObject.email; //getCookie("email");
    var token = userObject.token; //getCookie("token");
  } catch (e) {
    console.log("Session Invalid");
    Router.push("/auth/login");
    return;
  }

  httpPost(
    "/api/auth/session",
    {
      email: email,
      token: token,
    },
    doCheckingCB.bind(this)
  );

  function doCheckingCB(jsonObj) {
    if (jsonObj.success === true) {
      // Check for permission to access the page
      if (layoutType && layoutType !== "") {
        if (
          jsonObj.data.roles &&
          jsonObj.data.roles.length &&
          !jsonObj.data.roles.includes(CONST[layoutType])
        ) {
          try {
            console.log("Page Access Permission Denied");
            Router.push("/auth/login");
          } catch (e) {}
        }
      }
      localStorage.setItem("userObject", JSON.stringify(jsonObj.data));
    } else {
      try {
        Router.push("/auth/login");
      } catch (e) {}
    }
  }
}

export function getSixDigitRandom() {
  return Math.random().toString().substring(2, 8);
}

export function htmlDecode(input) {
  if (input.includes("&lt;")) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  } else {
    return input;
  }
}

export function checkServiceValue(services, service, module) {
  if (!services || !service || !module) return false;

  var serviceI = services.findIndex((x) => x.service === service);
  if (serviceI === -1) return false;
  if (!services[serviceI].modules) return false;

  var moduleI = services[serviceI].modules.findIndex((x) => x === module);
  if (moduleI === -1) return false;

  return true;
}
