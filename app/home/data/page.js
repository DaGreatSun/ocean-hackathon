"use client";
import { Row, Col } from "@components/CustomComponents";
import React from "react";
import SimpleForm from "@components/SimpleForm/SimpleForm";
import { Carousel, Button, Card, Accordion } from "react-daisyui";
import LineCustom from "@components/ChartCustom/LineCustom";
import DoughnutCustom from "@components/ChartCustom/DoughnutCustom";

export default function Data() {
  const lineData = {
    labels: [
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
    ],
    datasets: [
      {
        data: [
          1012.31, 1063.21, 1115.82, 1154.61, 1207.03, 1248.07, 1339.57,
          1414.06, 1463.68, 406.89, 458.39, 969.4,
        ],
        borderColor: "darkblue",
        label: "International Tourist Arrivals (million)",
      },
    ],
  };

  const doughnutPatientData = {
    labels: [
      "Europe",
      "Americas",
      "Asia and the Pacific",
      "Middle East",
      "Africa",
    ],
    datasets: [
      {
        data: [61, 16, 11, 7, 5],
        backgroundColor: [
          "#34A0A4",
          "#52B69A",
          "#76C893",
          "#99D98C",
          "#B5E48C",
        ],
        hoverOffset: 5,
      },
    ],
  };

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [reason, setReason] = React.useState("");

  return (
    <>
      <div
        className={
          "container grid max-w-full grid-cols-6 gap-0 lg:grid-cols-12"
        }
      >
        <div className="col-span-12">
          <img
            src={"/assets/img/greenfin-map.png"}
            style={{
              objectFit: "cover",
              width: "100%",
              objectPosition: "50% 75%",
            }}
            alt=""
          />
        </div>
        <div className="col-span-12 flex items-center p-5">
          <Card>
            <Card.Title>
              <h1 className="text-3xl">
                Malaysia Automatic Water Quality Monitoring Stations
              </h1>
            </Card.Title>
            <p className="py-4 text-justify">
              Malaysia possesses numerous islands, coastal regions, and seas
              abundant in aquatic resources. The quality of marine water is
              crucial for conserving these natural assets.The monitoring
              initiative for Peninsular Malaysia commenced in 1978 under the
              Department of Environment. Subsequently, in 1985, it expanded to
              include Sabah and Sarawak states, and in 1998, the Islands
              Monitoring Program was introduced.
            </p>
            <p className="text-justify">ETC ETC</p>
          </Card>
        </div>

        <div className="col-span-1 flex items-center px-5 pb-5 lg:col-span-12">
          <Card className="min-w-full">
            <Card.Title className="mb-2 border-b-2 pb-2 text-center">
              <h1 className="text-center text-xl font-bold">
                World Ecotourism Stats
              </h1>
            </Card.Title>
            <Card.Body className="overflow-x-auto">
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
                <div className="col-span-1 lg:col-span-7">
                  <Card className="shadow-lg">
                    <Card.Body>
                      <Card.Title>International Tourist Arrivals</Card.Title>
                      <LineCustom
                        data={lineData}
                        options={{
                          borderColor: "darkblue",
                          backgroundColor: "darkblue",
                          hoverBackgroundColor: "white",
                        }}
                        style={"mt-5"}
                      />
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-span-1 lg:col-span-5">
                  <Card className="shadow-lg">
                    <Card.Body>
                      <Card.Title>Regional Share (%)</Card.Title>
                      <DoughnutCustom data={doughnutPatientData} />
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-span-12">
          <Accordion className="rounded-none bg-[#ffffff]">
            <Accordion.Title className="bg-primary">
              <h1 className="text-center text-2xl font-bold text-white">
                Wish to use our data? Click Me!
              </h1>
            </Accordion.Title>
            <Accordion.Content className="hi -mt-2 border-t-2 bg-white">
              <Row style={"m-0 p-0"}>
                <Col>
                  <h1 className="text-center text-lg">
                    Drop us some information about you, we will contact you
                    soon!
                  </h1>
                </Col>
                <SimpleForm
                  key={"key-firstName"}
                  size={6}
                  name={"First Name"}
                  type={"text"}
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <SimpleForm
                  key={"key-lastName"}
                  size={6}
                  name={"Last Name"}
                  type={"text"}
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                <SimpleForm
                  key={"key-organization"}
                  size={6}
                  name={"Organization"}
                  type={"text"}
                  value={organization}
                  onChange={(e) => {
                    setOrganization(e.target.value);
                  }}
                />
                <SimpleForm
                  key={"key-email"}
                  size={6}
                  name={"Email"}
                  type={"text"}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <SimpleForm
                  key={"key-reason"}
                  size={12}
                  name={"Reason of use"}
                  type={"textarea"}
                  value={reason}
                  onChange={(e) => {
                    setReason(e.target.value);
                  }}
                />
                <div className="col-span-12">
                  <Button
                    className="min-w-full rounded-full"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    color="primary"
                  >
                    Submit
                  </Button>
                </div>
              </Row>
            </Accordion.Content>
          </Accordion>
        </div>
      </div>
    </>
  );
}
