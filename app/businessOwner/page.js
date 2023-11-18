"use client";
import { Row, Col } from "@components/CustomComponents";
import { Card, Carousel, Table } from "react-daisyui";
import LineCustom from "@components/ChartCustom/LineCustom";
import DoughnutCustom from "@components/ChartCustom/DoughnutCustom";
import BarCustom from "@components/ChartCustom/BarCustom";

export default function BusinessOwner() {
  const lineData = {
    labels: [
      "Week 24",
      "Week 25",
      "Week 26",
      "Week 27",
      "Week 28",
      "Week 29",
      "Week 30",
    ],
    datasets: [
      {
        data: [5, 2, 9, 1, 3, 7, 0],
        borderColor: "red",
      },
      // {
      //   data: [0.5, 0.1, 0.6, 0.3, 0.8, 0, 0.4],
      //   borderColor: "blue",
      // },
    ],
  };

  const doughnutPatientData = {
    labels: ["Neurology", "Orthopaedics", "Cardiology", "Pathology"],
    datasets: [
      {
        data: [20, 11, 5, 7],
        backgroundColor: ["#EEEEEE", "#068FFF", "#4E4FEB", "#000000"],
        hoverOffset: 5,
      },
    ],
  };

  const doughnutDoctorData = {
    labels: ["Neurology", "Orthopaedics", "Cardiology", "Pathology"],
    datasets: [
      {
        data: [2, 3, 1, 3],
        backgroundColor: ["#FFF3E2", "#FFE5CA", "#FA9884", "#E74646"],
        hoverOffset: 5,
      },
    ],
  };

  const barData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [2, 3, 7, 1, 2, 5, 9, 11, 7, 3, 6, 1],
        backgroundColor: "#EDF4FF",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
        barThickness: 35,
        label: "Admisssion Rate (%)",
      },
    ],
  };

  return (
    <>
      <Card>
        <h1 className="mb-5 border-b-2 py-2 text-center text-3xl font-bold">
          Dashboard
        </h1>
        <Card.Body>
          <Row>
            <Col>
              <Card className="min-w-full px-4">
                <Card.Title className="mb-2 border-b-2 pb-2 text-center">
                  <h1 className="text-center text-xl font-bold">
                    World Health Analytics
                  </h1>
                </Card.Title>
                <Card.Body className="overflow-x-auto">
                  <Row>
                    <Col colSize={7}>
                      <Card className="shadow-lg">
                        <Card.Body>
                          <Card.Title>Patients Admission Rate</Card.Title>
                          <BarCustom data={barData} />
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col colSize={5}>
                      <Card className="shadow-lg">
                        <Card.Body>
                          <Card.Title>Patients Admission Rate</Card.Title>
                          <DoughnutCustom data={doughnutPatientData} />
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col colSize={5}>
                      <Card className="shadow-lg">
                        <Card.Body>
                          <Card.Title>Patients Admission Rate</Card.Title>
                          <DoughnutCustom data={doughnutDoctorData} />
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col colSize={7}>
                      <Card className="shadow-lg">
                        <Card.Body>
                          <Card.Title>Patients Admission Rate</Card.Title>
                          <LineCustom
                            data={lineData}
                            options={{
                              borderColor: "red",
                              backgroundColor: "red",
                              hoverBackgroundColor: "white",
                            }}
                            style={"mt-5"}
                          />
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col colSize={3}>
              <Card className="min-w-full px-4">
                <Card.Title className="mb-2 border-b-2 pb-2 text-center">
                  <h1 className="text-center text-xl font-bold">
                    Business Info
                  </h1>
                </Card.Title>
                <Card.Body className="overflow-x-auto">
                  <Table border={10} className="hover:" zebra>
                    <Table.Head className="text-lg/[15px]">
                      <span>Category</span>
                      <span>Info</span>
                    </Table.Head>

                    <Table.Body>
                      <Table.Row>
                        <span>Activities Sold</span>
                        <span>429</span>
                      </Table.Row>

                      <Table.Row>
                        <span>Accomodations Sold</span>
                        <span>59</span>
                      </Table.Row>

                      <Table.Row>
                        <span>Active Bookings</span>
                        <span>32</span>
                      </Table.Row>

                      <Table.Row>
                        <span>Customer Visits (Today)</span>
                        <span>1029</span>
                      </Table.Row>

                      <Table.Row>
                        <span>Currently Booked</span>
                        <span>32</span>
                      </Table.Row>

                      <Table.Row>
                        <span>Currently Booked</span>
                        <span>32</span>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            <Col colSize={9}>
              <Card className="min-w-full px-4">
                <Card.Title className="mb-2 border-b-2 pb-2 text-center">
                  <h1 className="text-center text-xl font-bold">
                    Business Analytics
                  </h1>
                </Card.Title>
                <Card.Body className="overflow-x-auto">
                  <Row>
                    <Col colSize={12}>
                      <Card className="shadow-lg">
                        <Card.Body>
                          <Card.Title>Patients Admission Rate</Card.Title>
                          <BarCustom data={barData} />
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col colSize={6}>
                      <Card className="shadow-lg">
                        <Card.Body>
                          <Card.Title>Patients Admission Rate</Card.Title>
                          <DoughnutCustom data={doughnutPatientData} />
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col colSize={6}>
                      <Card className="shadow-lg">
                        <Card.Body>
                          <Card.Title>Patients Admission Rate</Card.Title>
                          <DoughnutCustom data={doughnutDoctorData} />
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col colSize={12}>
                      <Card className="shadow-lg">
                        <Card.Body>
                          <Card.Title>Patients Admission Rate</Card.Title>
                          <LineCustom
                            data={lineData}
                            options={{
                              borderColor: "red",
                              backgroundColor: "red",
                              hoverBackgroundColor: "white",
                            }}
                            style={"mt-5"}
                          />
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
