"use client";
import { Row, Col } from "@components/CustomComponents";
import { Card, Carousel, Table } from "react-daisyui";
import LineCustom from "@components/ChartCustom/LineCustom";
import DoughnutCustom from "@components/ChartCustom/DoughnutCustom";
import BarCustom from "@components/ChartCustom/BarCustom";

export default function Admin() {
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
      // {
      //   data: [0.5, 0.1, 0.6, 0.3, 0.8, 0, 0.4],
      //   borderColor: "blue",
      // },
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

  const doughnutDoctorData = {
    labels: [
      "Kayaking",
      "Snorkeling",
      "Wind Surfing",
      "Diving",
      "Island Hopping",
      "Boat Tour",
    ],
    datasets: [
      {
        data: [23, 20, 19, 14, 12, 5],
        backgroundColor: [
          "#168AAD",
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
        data: [
          1230, 3024, 2304, 2501, 2724, 5320, 7982, 10239, 15229, 19120, 9210,
          0,
        ],
        backgroundColor: "#EDF4FF",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
        barThickness: 20,
        label: "Sales (RM)",
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
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-12">
              <Card className="min-w-full px-4">
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
                          <Card.Title>
                            International Tourist Arrivals
                          </Card.Title>
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
            <div className="col-span-1 lg:col-span-3">
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
            </div>
            <div className="col-span-1 lg:col-span-9">
              <Card className="min-w-full px-4">
                <Card.Title className="mb-2 border-b-2 pb-2 text-center">
                  <h1 className="text-center text-xl font-bold">
                    Business Analytics
                  </h1>
                </Card.Title>
                <Card.Body className="overflow-x-auto">
                  <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
                    <div className="col-span-1 lg:col-span-5">
                      <Card className="shadow-lg">
                        <Card.Body>
                          <Card.Title>Activity Popularity</Card.Title>
                          <DoughnutCustom data={doughnutDoctorData} />
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="col-span-1 lg:col-span-7">
                      <Card className="shadow-lg">
                        <Card.Body>
                          <Card.Title>Total Sales</Card.Title>
                          <BarCustom data={barData} />
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
