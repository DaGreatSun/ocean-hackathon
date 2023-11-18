"use client";
import { Row, Col } from "@components/CustomComponents";
import React from "react";
import SimpleForm from "@components/SimpleForm/SimpleForm";
import { Carousel, Button, Card, Accordion } from "react-daisyui";

export default function Data() {
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
          {/* <img
            src={"/assets/img/greenfin-map.png"}
            style={{
              objectFit: "cover",
              width: "100%",
              height: 599,
              objectPosition: "50% 75%",
            }}
            alt=""
          /> */}
        </div>
        <div className="col-span-12 flex items-center p-5">
          <Card>
            <Card.Title>
              <h1 className="pb-4 text-3xl">Our Mission</h1>
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
            <Accordion.Content className="hi border-t-2 bg-white">
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
