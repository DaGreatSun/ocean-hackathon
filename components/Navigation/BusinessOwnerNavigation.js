import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Cyling Imports
import { GiCycling } from "react-icons/gi";
import { Button } from "react-daisyui";

function BusinessOwnerNavigation() {
  const [locationRef, setLocationRef] = React.useState("");
  const [counter, setCounter] = React.useState(0);
  const [tempRoutes, setTempRoutes] = React.useState([]);

  const styles = {
    row: {
      display: "flex",
      overflow: "auto",
      marginBottom: 30,
    },
    column: {
      padding: 15,
    },
    icon: {
      backgroundColor: "#C5DCE7",
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
      icon: <GiCycling size={40} style={{ objectFit: "cover" }} alt="" />,
      route: "/businessOwner/activity/kayaking",
    },
    {
      title: "JUNGLE TREKKING",
      icon: <GiCycling size={40} style={{ objectFit: "cover" }} alt="" />,
      route: "/businessOwner/activity/jungleTrekking",
    },
    {
      title: "BOAT TOUR",
      icon: <GiCycling size={40} style={{ objectFit: "cover" }} alt="" />,
      route: "/businessOwner/activity/boatTour",
    },
  ];

  const router = useRouter();

  React.useEffect(() => {
    setLocationRef(window.location.href);
  }, [counter]);

  React.useEffect(() => {
    setTempRoutes(routes);
  }, [locationRef]);

  return (
    <>
      <div style={styles.row}>
        {tempRoutes.map((item, key) => {
          var s = { ...styles.icon };

          return (
            <div style={styles.column} key={key}>
              <Link
                href={item.route}
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                <div
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
                <div style={styles.title}>{item.title}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BusinessOwnerNavigation;
