"use client";
import { Row, Col } from "@components/CustomComponents";
import React from "react";
import SimpleForm from "@components/SimpleForm/SimpleForm";
import { Carousel, Button, Card } from "react-daisyui";

export default function Data() {
  return (
    <>
      <div
        className={
          "container grid max-w-full grid-cols-6 gap-0 lg:grid-cols-12"
        }
      >
        <div className="col-span-12 my-0 lg:col-span-7">
          <img
            src={"/pictures/archipelago.jpg"}
            style={{
              objectFit: "cover",
              width: "100%",
              height: 500,
              objectPosition: "50% 75%",
            }}
            alt=""
          />
        </div>
        <div className="col-span-6 flex items-center p-10 lg:col-span-5">
          <div>
            <h1 className="pb-4 text-3xl">Our Mission</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              auctor purus velit, nec porta dui vehicula ac. Vestibulum vitae
              pretium odio. Aliquam nec lectus eu arcu accumsan condimentum ut
              in enim. Mauris consequat elementum nunc ut tincidunt. Vestibulum
              consequat urna ut enim ullamcorper blandit. Cras sit amet elit a
              metus fermentum dapibus nec at orci. In sodales, sapien eu
              tincidunt scelerisque, sem risus aliquet ante, non elementum orci
              ipsum varius eros. Pellentesque non placerat ligula. Sed semper
              scelerisque iaculis. Sed quis vulputate ipsum. Ut sed fringilla
              metus. Vestibulum id nibh est. Suspendisse scelerisque luctus
              facilisis.
            </p>
          </div>
        </div>
        <div className="col-span-6 flex items-center p-10 lg:col-span-5">
          <div>
            <h1 className="pb-4 text-3xl">Our Team</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              auctor purus velit, nec porta dui vehicula ac. Vestibulum vitae
              pretium odio. Aliquam nec lectus eu arcu accumsan condimentum ut
              in enim. Mauris consequat elementum nunc ut tincidunt. Vestibulum
              consequat urna ut enim ullamcorper blandit. Cras sit amet elit a
              metus fermentum dapibus nec at orci. In sodales, sapien eu
              tincidunt scelerisque, sem risus aliquet ante, non elementum orci
              ipsum varius eros. Pellentesque non placerat ligula. Sed semper
              scelerisque iaculis. Sed quis vulputate ipsum. Ut sed fringilla
              metus. Vestibulum id nibh est. Suspendisse scelerisque luctus
              facilisis.
            </p>
          </div>
        </div>
        <div className="col-span-6 my-0 lg:col-span-7">
          <img
            src={"/pictures/waves_rocks.jpg"}
            style={{
              objectFit: "cover",
              width: "100%",
              height: 500,
              objectPosition: "50% 75%",
            }}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
