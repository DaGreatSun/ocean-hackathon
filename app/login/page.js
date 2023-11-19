"use client";
import { Row, Col } from "@components/CustomComponents";
import { Card, Modal, Button } from "react-daisyui";
import Link from "next/link";

function renderMerchant() {
  return (
    <>
      <div className="card bg-white bg-opacity-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="/assets/img/cashier.png"
            className="rounded-xl"
            height={200}
            width={200}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Merchant</h2>
        </div>
      </div>
    </>
  );
}

function renderAdmin() {
  return (
    <>
      <div className="card bg-white bg-opacity-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="/assets/img/admin.png"
            className="rounded-xl"
            height={200}
            width={200}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Admin</h2>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <div className="bg-loginBG h-screen bg-cover bg-center bg-no-repeat">
        <div className="flex h-screen items-center justify-center">
          <Card className="border bg-white bg-opacity-95 p-5 shadow-xl">
            <Card.Body className="card-body divide-y divide-solid">
              <div>
                <div className="item-center flex justify-center pb-5 text-2xl font-bold">
                  I am logging in as a...
                </div>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  <Col colSize={1}>
                    <Link href={"/businessOwner"}>{renderMerchant()}</Link>
                  </Col>
                  <Col colSize={1}>
                    <Link href={"/admin"}>{renderAdmin()}</Link>
                  </Col>
                </div>
                <Button className="mt-5 w-full" color="success">
                  No Account? Register Here!
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
