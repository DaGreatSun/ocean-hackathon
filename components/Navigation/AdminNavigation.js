import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Icon Imports
import { IconContext } from "react-icons";
import {
  GiContract,
  GiCycling,
  GiDivingHelmet,
  GiIsland,
  GiJungle,
  GiNotebook,
  GiSnorkel,
} from "react-icons/gi";
import { IoMdAdd } from "react-icons/io";
import {
  FaBook,
  FaCalendar,
  FaCirclePlus,
  FaGear,
  FaPersonSwimming,
  FaPlus,
  FaServicestack,
  FaUser,
} from "react-icons/fa6";
import { Button } from "react-daisyui";
import { MdKayaking, MdSurfing } from "react-icons/md";
import { IoBoat, IoBusiness } from "react-icons/io5";
import { PiSwimmingPool } from "react-icons/pi";

function AdminNavigation() {
  const [locationRef, setLocationRef] = React.useState("");
  const [counter, setCounter] = React.useState(0);
  const [tempRoutes, setTempRoutes] = React.useState([]);

  const styles = {
    row: {
      display: "flex",
      overflow: "auto",
    },
    column: {
      padding: 15,
      paddingTop: 0,
    },
    icon: {
      borderRadius: "50%",
      width: "80px",
      height: "80px",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      boxShadow: "0 6px 4px rgba(100, 100, 100, 0.15)",
    },
    title: {
      width: "80px",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      display: "flex",
      fontWeight: 500,
      fontSize: 13,
      color: "#0b0b0b",
    },
  };

  const routes = [
    {
      title: "USER",
      icon: (
        <FaUser size={50} fill="white" style={{ objectFit: "cover" }} alt="" />
      ),
      route: "/admin",
    },
    {
      title: "ROLE",
      icon: (
        <FaGear size={50} fill="white" style={{ objectFit: "cover" }} alt="" />
      ),
      route: "/admin",
    },
    {
      title: "CONTRACT",
      icon: (
        <GiContract
          size={50}
          fill="white"
          style={{ objectFit: "cover" }}
          alt=""
        />
      ),
      route: "/admin",
    },
    {
      title: "REVIEW",
      icon: (
        <FaBook size={50} fill="white" style={{ objectFit: "cover" }} alt="" />
      ),
      route: "/admin",
    },
    {
      title: "SCHEDULER",
      icon: (
        <FaCalendar
          size={50}
          fill="white"
          style={{ objectFit: "cover" }}
          alt=""
        />
      ),
      route: "/admin",
    },
    {
      title: "ACTIVITIES",
      icon: (
        <FaPersonSwimming
          size={50}
          fill="white"
          style={{ objectFit: "cover" }}
          alt=""
        />
      ),
      route: "/admin",
    },
    {
      title: "SERVICES",
      icon: (
        <FaServicestack
          size={50}
          fill="white"
          style={{ objectFit: "cover" }}
          alt=""
        />
      ),
      route: "/admin",
    },
    {
      title: "GUIDELINES",
      icon: (
        <GiNotebook
          size={50}
          fill="white"
          style={{ objectFit: "cover" }}
          alt=""
        />
      ),
      route: "/admin",
    },
    {
      title: "BUSINESS",
      icon: (
        <IoBusiness
          size={50}
          fill="white"
          style={{ objectFit: "cover" }}
          alt=""
        />
      ),
      route: "/admin",
    },
  ];

  const router = useRouter();

  React.useEffect(() => {
    setLocationRef(window.location.href);
  }, [counter]);

  return (
    <>
      <div style={styles.row}>
        {routes.map((item, key) => {
          var s = { ...styles.icon };

          return (
            <>
              <div style={styles.column} key={"navigation-key-" + key}>
                <Link
                  href={item.route}
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  <div
                    className="bg-[#76b2c8] transition-colors delay-100 ease-in-out hover:bg-cyan-400"
                    style={{
                      ...s,
                      // backgroundColor:
                      //   locationRef.indexOf(item.route) !== -1
                      //     ? "#111111"
                      //     : "#C5DCE7",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="pt-1" style={styles.title}>
                    {item.title}
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AdminNavigation;
