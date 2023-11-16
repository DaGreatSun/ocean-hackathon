"use client";
import React from "react";
import { Modal, Button } from "react-daisyui";
import { twMerge } from "tailwind-merge";

export function Content({ children }) {
  return <div className="m-5 h-fit">{children}</div>;
}

export function Row({ children, totalCol, style }) {
  var gridCol = "grid-cols-12";
  if (totalCol && totalCol !== "" && totalCol > 0) {
    gridCol = "grid-cols-" + totalCol;
  }

  return (
    <div
      className={twMerge(
        `container grid ${gridCol} my-1 max-w-full gap-2`,
        style,
      )}
    >
      {children}
    </div>
  );
}

export function Col({ children, colSize, style }) {
  var colSpan = "col-span-12";
  if (colSize && colSize !== "" && colSize > 0) {
    colSpan = "col-span-" + colSize;
  }

  return (
    <div className={twMerge(`${colSpan} ${style} my-0 gap-2`, style)}>
      {children}
    </div>
  );
}

export function CustomModal({ children, open, onClose, title, className }) {
  function closeModal() {
    try {
      onClose();
    } catch (error) {
      console.log("Please initialize onClose function");
    }
  }

  if (open === undefined || open === null) {
    return null;
  }

  return (
    <Modal.Legacy
      className="max-w-[80%] p-0"
      backdrop={true}
      open={open}
      onClickBackdrop={() => {
        closeModal();
      }}
    >
      <Modal.Header className="sticky top-0 z-10 m-0 flex items-center justify-between border-b-2 border-gray-400 bg-white px-6 py-2">
        <h1 className="font-bold">{title}</h1>
        <Button
          formMethod="dialog"
          size="md"
          color="ghost"
          shape="circle"
          className="text-xl font-bold"
          onClick={() => {
            closeModal();
          }}
        >
          x
        </Button>
      </Modal.Header>
      <Modal.Body className={`p-6 ${className}`}>{children}</Modal.Body>
    </Modal.Legacy>
  );
}
