"use client";
import { Row, Col } from "@components/CustomComponents";
import { Card, Modal, Button } from "react-daisyui";
import Link from "next/link";

function renderMerchant() {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="/assets/img/cashier.png" className="rounded-xl" />
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
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="/assets/img/admin.png" className="rounded-xl" />
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
          <Card className="b-0 border bg-white opacity-95 shadow-xl">
            <Card.Body className="card-body divide-y divide-solid">
              <div>
                <h2 className="card-title text-center">Life hack</h2>
              </div>

              <div>
                <div className="item-center flex justify-center py-2">
                  I am logging in as a...
                </div>
                <Row>
                  <Col colSize={6}>
                    <Link href={"/businessOwner"}>{renderMerchant()}</Link>
                  </Col>
                  <Col colSize={6}>
                    <Link href={"/admin"}>{renderAdmin()}</Link>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
