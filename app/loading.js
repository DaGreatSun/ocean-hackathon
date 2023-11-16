import React from "react";
import Image from "next/image";

function Loading() {
  return (
    <div
      style={{ backgroundColor: "#F2F8FC" }}
      className=" flex h-screen w-full items-center"
    >
      <div className="m-auto text-center ">
        <Image
          src={"/next.svg"}
          width={450}
          height={250}
          alt="logo"
          className="m-auto mb-5 pb-3 pl-0 pr-3"
        />
        <div className="text-2xl font-semibold">Loading contents...</div>
      </div>
    </div>
  );
}

export default Loading;
