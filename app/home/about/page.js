"use client";
import { Row, Col } from "@components/CustomComponents";
import React from "react";
import SimpleForm from "@components/SimpleForm/SimpleForm";
import { Carousel, Button, Card } from "react-daisyui";

export default function About() {
  return (
    <>
      <div
        className={
          "container grid max-w-full grid-cols-6 gap-0 lg:grid-cols-12"
        }
      >
        <div className="col-span-6 my-0 lg:col-span-7">
          <img
            src={"/pictures/archipelago.jpg"}
            style={{
              objectFit: "cover",
              width: "100%",
              height: 400,
              objectPosition: "50% 75%",
            }}
            alt=""
          />
        </div>
        <div className="col-span-6 flex items-center p-10 lg:col-span-5">
          <div>
            <h1 className="pb-4 text-3xl">Our Mission</h1>
            <p className="text-justify">
              Our mission is to ensure the tourism industry is positioned to
              provide decent jobs, stable incomes and protect our cultural and
              natural heritage. We aim to provide accessibility of the science
              we need for the ocean we want.
            </p>
          </div>
        </div>
        <div className="col-span-6 flex items-center p-10 lg:col-span-5">
          <div>
            <h1 className="pb-4 text-3xl">Our Team</h1>
            <p className="text-justify">
              FanSEA is a platform for booking your next ocean adventure,
              whether it is to find coastal accommodations that adhere to green
              practices, or activities like scuba diving, snorkeling, and
              kayaking that adhere to best practice for a wholesome experience.
            </p>
          </div>
        </div>
        <div className="col-span-6 my-0 lg:col-span-7">
          <img
            src={"/assets/img/us.png"}
            style={{
              objectFit: "cover",
              width: "100%",
              height: 400,
              objectPosition: "50% 35%",
            }}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
