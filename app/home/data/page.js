"use client";
import { Row, Col } from "@components/CustomComponents";
import React from "react";
import SimpleForm from "@components/SimpleForm/SimpleForm";
import { Carousel, Button, Card, Accordion } from "react-daisyui";

export default function Data() {
  const mapData = [
    {
      name: "CM01K",
      state: "Kedah",
      location: "Pulau Langakawi",
      longitude: "99.79086",
      latitude: "6.294944",
    },
    {
      name: "CM02M",
      state: "Melaka",
      location: "Pulau Undan, Melaka",
      longitude: "102.334742",
      latitude: "2.047799",
    },
    {
      name: "CM03N",
      state: "Negeri Sembilan",
      location: "Port Dickson, Negeri Sembilan",
      longitude: "101.788525",
      latitude: "2.513106",
    },
    {
      name: "CM04J",
      state: "Johor",
      location: "Tanjung Piai, Johor",
      longitude: "103.509578",
      latitude: "1.260289",
    },
    {
      name: "CM05J",
      state: "Johor",
      location: "Tanjung Pengelih, Johor",
      longitude: "104.08765",
      latitude: "1.369875",
    },
    {
      name: "CM10S",
      state: "W.P Labuan",
      location: "W.P. Labuan",
      longitude: "115.240514",
      latitude: "5.276614",
    },
    {
      name: "CM11Q",
      state: "Sarawak",
      location: "Santubong, Sarawak",
      longitude: "110.328208",
      latitude: "1.716522",
    },
    {
      name: "CM12A",
      state: "Perak",
      location: "Perak",
      longitude: "100.536925",
      latitude: "4.224834",
    },
    {
      name: "CM13T",
      state: "Terengganu",
      location: "Pulau Kapas, Terengganu",
      longitude: "103.261203",
      latitude: "5.217085",
    },
    {
      name: "CM14S",
      state: "Sabah",
      location: "Teluk Sepanggar, Sabah",
      longitude: "116.116331",
      latitude: "6.068786",
    },
  ];

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
              <h1 className="pb-4 text-3xl">Current Health</h1>
            </Card.Title>
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
                    Search
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
