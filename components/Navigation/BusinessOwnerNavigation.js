import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Icon Imports
import { IconContext } from "react-icons";
import { GiBoatEngine, GiCycling, GiJungle } from "react-icons/gi";
import { IoMdAdd } from "react-icons/io";
import { FaCirclePlus, FaPlus } from "react-icons/fa6";
import { Button } from "react-daisyui";
import { MdKayaking } from "react-icons/md";
import { IoBoat } from "react-icons/io5";

function BusinessOwnerNavigation() {
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
      title: "KAYAKING",
      icon: (
        <MdKayaking
          size={50}
          fill="white"
          style={{ objectFit: "cover" }}
          alt=""
        />
      ),
      route: "/businessOwner/activity/kayaking",
    },
    {
      title: "JUNGLE TREKKING",
      icon: (
        <GiJungle
          size={50}
          fill="white"
          style={{ objectFit: "cover" }}
          alt=""
        />
      ),
      route: "/businessOwner/activity/jungleTrekking",
    },
    {
      title: "BOAT TOUR",
      icon: (
        <IoBoat size={50} fill="white" style={{ objectFit: "cover" }} alt="" />
      ),
      route: "/businessOwner/activity/boatTour",
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
              <div style={styles.column} key={key}>
                <Link
                  href={item.route}
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  <div
                    className="bg-[#76C893] hover:bg-green-400"
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
              {key === routes.length - 1 ? (
                <div className="p-4">
                  <div
                    className="btn btn-circle self-center"
                    style={{
                      backgroundColor: "#15FF25",
                      border: "none",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      boxShadow: "0 6px 4px rgba(100, 100, 100, 0.15)",
                    }}
                  >
                    <FaPlus
                      fill="white"
                      size={20}
                      style={{ objectFit: "cover", color: "white" }}
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                <div />
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

export default BusinessOwnerNavigation;
