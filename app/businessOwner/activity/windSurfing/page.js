"use client";
import { Row, Col } from "@components/CustomComponents";
import { Card, Carousel, Table } from "react-daisyui";
import LineCustom from "@components/ChartCustom/LineCustom";
import DoughnutCustom from "@components/ChartCustom/DoughnutCustom";
import BarCustom from "@components/ChartCustom/BarCustom";

export default function WindSurfing() {
  const lineData = {
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
        data: [2, 3, 7, 1, 2, 5, 9, 11, 7, 13, 15, 20],
        borderColor: "red",
      },
    ],
  };

  return (
    <>
      <Card>
        <h1 className="mb-5 border-b-2 py-2 text-center text-3xl font-bold">
          WindSurfing
        </h1>
        <Card.Body>
          <Row>
            <Col>
              <Card className="shadow-lg">
                <Card.Title>Activity Popularity</Card.Title>
                <Card.Body>
                  <LineCustom
                    data={lineData}
                    options={{
                      borderColor: "red",
                      backgroundColor: "red",
                      hoverBackgroundColor: "white",
                    }}
                    style={"pt-5"}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
