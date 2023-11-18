import React from "react";
// import GoogleMapReact, { fitBounds } from "google-map-react";
import { PiDotDuotone } from "react-icons/pi";

export default function MapCustom({ mapData }) {
  const Marker = ({ title, lat, lng }) => (
    <PiDotDuotone
      alt="marker"
      fill="red"
      size={10}
      className="absolute left-[50%] top-[50%] cursor-pointer select-none"
    />
  );

  let bounds = {
    ne: {
      lat: 0,
      lng: 0,
    },
    sw: {
      lat: 0,
      lng: 0,
    },
  };
  const size = {
    width: 640,
    height: 400,
  };

  if (!mapData || !mapData.length) {
    console.log("Map Data Invalid");
    return <div />;
  }

  for (let i = 0; i < mapData.length; i++) {
    if (bounds.ne.lat === 0) {
      bounds.ne.lat = mapData[i].latitude;
      bounds.ne.lng = mapData[i].longitude;
      bounds.sw.lat = mapData[i].latitude;
      bounds.sw.lng = mapData[i].longitude;
    } else {
      if (mapData[i].latitude > bounds.ne.lat) {
        bounds.ne.lat = mapData[i].latitude;
      }
      if (mapData[i].latitude < bounds.sw.lat) {
        bounds.sw.lat = mapData[i].latitude;
      }
      if (mapData[i].longitude > bounds.ne.lng) {
        bounds.ne.lng = mapData[i].longitude;
      }
      if (mapData[i].longitude < bounds.sw.lng) {
        bounds.sw.lng = mapData[i].longitude;
      }
    }
  }

  var string = "";
  for (let i = 0; i < mapData.length; i++) {
    string += `${mapData[i].latitude},${mapData[i].longitude},${mapData[i].name},#FF0000\n`;
  }
  console.log(string);

  //   const { center, zoom } = fitBounds(bounds, size);

  return (
    <></>
    // <GoogleMapReact
    //   bootstrapURLKeys={{ key: "" }}
    //   defaultCenter={center}
    //   defaultZoom={zoom}
    // >
    //   {mapData.map((item, key) => (
    //     <Marker
    //       key={`map-marker-${key}`}
    //       title={item.name}
    //       lat={item.latitude}
    //       lng={item.longitude}
    //     />
    //   ))}
    // </GoogleMapReact>
  );
}
