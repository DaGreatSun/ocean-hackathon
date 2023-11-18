"use client";
import { Row, Col } from "@components/CustomComponents";
import React from "react";
import SimpleForm from "@components/SimpleForm/SimpleForm";
import { Carousel, Button, Card } from "react-daisyui";

export default function Home() {
  const [destination, setDestination] = React.useState("");
  const [date, setDate] = React.useState("");
  const [filter, setFilter] = React.useState("");

  const promotionArr = [
    {
      name: "Langkawi",
      description: "Most Beautiful Island",
      offer: "20",
      image: "/pictures/dolphins.jpg",
    },
    {
      name: "",
      description: "",
      offer: "30",
      image: "/pictures/archipelago.jpg",
    },
    { name: "", description: "", offer: "", image: "/pictures/barnacles.jpg" },
    {
      name: "",
      description: "",
      offer: "40",
      image: "/pictures/beach_hammock.jpg",
    },
    { name: "", description: "", offer: "", image: "/pictures/caves.jpg" },
    {
      name: "",
      description: "",
      offer: "15",
      image: "/pictures/hut_by_the_beach.jpg",
    },
    { name: "", description: "", offer: "25", image: "/pictures/starfish.jpg" },
  ];
  const result = [{}];

  function promotionCarousel() {
    return (
      <Carousel className="overflow-x-auto rounded-2xl">
        {promotionArr.map((item, index) => {
          return (
            <Carousel.Item
              alt=""
              key={`carousel-${index}`}
              className="cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.image}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    width: 250,
                    height: 300,
                    objectPosition: "50% 75%",
                  }}
                  alt=""
                />
                <div className="absolute left-0 top-0 rounded-br-2xl bg-red-500 p-2">
                  <span className="text-center font-bold text-white">
                    {item.offer}% off
                  </span>
                </div>
                <div className="absolute bottom-0 h-24 min-w-full bg-black bg-opacity-30 p-2">
                  <h1 className="text-center font-bold text-white">
                    {item.name}
                  </h1>
                  <h1 className="text-center text-white">{item.description}</h1>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }

  return (
    <>
      <div className={"container grid max-w-full grid-cols-6 lg:grid-cols-12"}>
        <div className="col-span-6 lg:col-span-12">
          <div className="relative">
            <img
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
          <div className="container grid max-w-full grid-cols-3 gap-2 p-2 lg:grid-cols-12">
            <div className="col-span-3 my-0">
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
            <div className="col-span-3 my-0">
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
            <div className="col-span-3 my-0">
              <SimpleForm
                key={"key-filter"}
                size={5}
                name={"Filter"}
                type={"select"}
                options={[
                  { text: "", value: "" },
                  { text: "Activity", value: "" },
                  { text: "Accomodation", value: "Accomodation" },
                  { text: "Transportation", value: "Transportation" },
                ]}
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              />
            </div>
            <div className="col-span-3 my-0 flex items-center">
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
        <div className="col-span-6 border-r-2 p-2 lg:col-span-12">
          <h1 className="p-3 text-center text-3xl font-bold">
            Results (REMOVE)
          </h1>
        </div>
        <div className="col-span-6 p-2 lg:col-span-12">
          <h1 className="p-3 text-center text-3xl font-bold">Promotions</h1>
          {promotionCarousel()}
        </div>
      </div>
    </>
  );
}
