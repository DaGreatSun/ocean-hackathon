"use client";
import { Row, Col } from "@components/CustomComponents";
import React from "react";
import SimpleForm from "@components/SimpleForm/SimpleForm";
import { Carousel, Button, Form } from "react-daisyui";

export default function Home() {
  const [destination, setDestination] = React.useState("");
  const [date, setDate] = React.useState("");
  const promotionArr = [];

  function promotionCarousel() {
    return <Carousel>{promotionArr.map((item, index) => {})}</Carousel>;
  }

  return (
    <>
      <div className={"container grid max-w-full grid-cols-6 lg:grid-cols-12"}>
        <div className="col-span-6 lg:col-span-12">
          <div className="relative">
            <img
              // className="h-[10]"
              src={"/pictures/archipelago.jpg"}
              style={{
                objectFit: "cover",
                width: "100%",
                height: 350,
                objectPosition: "50% 50%",
              }}
              alt=""
            />
            <div className="absolute inset-x-0 bottom-8 w-full px-[10%] py-2.5 text-center text-2xl">
              <div className="text-5xl text-white">
                Lorem ipsum dolor sit amet
              </div>
              <div className="text-3xl text-white">
                consectetur adipiscing elit.
              </div>
              <div className="text-xl text-white">
                Curabitur auctor purus velit, nec porta dui vehicula ac.
                Vestibulum vitae pretium odio. Lorem ipsum dolor sit amet,
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 pt-4 lg:col-span-12">
          <div className="container grid max-w-full grid-cols-5 gap-2 p-2 lg:grid-cols-12">
            <div className="col-span-5 my-0">
              <SimpleForm
                key={"key-destination"}
                size={5}
                name={"Destination"}
                type={"text"}
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
              />
            </div>
            <div className="col-span-5 my-0">
              <SimpleForm
                key={"key-date"}
                size={5}
                name={"Date"}
                type={"date"}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div className="col-span-5 my-0 flex items-center lg:col-span-2">
              <Button
                className="min-w-full rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                }}
                color="primary"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-6 p-2 lg:col-span-12">
          <h1 className="text-center text-3xl font-bold">Promotions</h1>
          {promotionCarousel()}
        </div>
        <div className="col-span-6 my-0">
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
        <div className="col-span-6 p-10">
          <h1 className="pb-4 text-3xl">Our Mission</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            auctor purus velit, nec porta dui vehicula ac. Vestibulum vitae
            pretium odio. Aliquam nec lectus eu arcu accumsan condimentum ut in
            enim. Mauris consequat elementum nunc ut tincidunt. Vestibulum
            consequat urna ut enim ullamcorper blandit. Cras sit amet elit a
            metus fermentum dapibus nec at orci. In sodales, sapien eu tincidunt
            scelerisque, sem risus aliquet ante, non elementum orci ipsum varius
            eros. Pellentesque non placerat ligula. Sed semper scelerisque
            iaculis. Sed quis vulputate ipsum. Ut sed fringilla metus.
            Vestibulum id nibh est. Suspendisse scelerisque luctus facilisis.
          </p>
        </div>
      </div>
    </>
  );
}
