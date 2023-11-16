import React from "react";
import Image from "next/image";
import { HiSpeakerphone } from "react-icons/hi";
import { Card, Carousel, Modal } from "react-daisyui";

function CarouselCustom({ items, readMoreBtn }) {
  /***************************************************************************************/
  //State
  /***************************************************************************************/
  const [openModal, setOpenModal] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [createDate, setCreateDate] = React.useState("");

  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/
  function scrollLeft() {
    document.getElementById("content").scrollLeft -= 500;
  }
  function scrollRight() {
    document.getElementById("content").scrollLeft += 500;
  }

  function toOpenModal(item) {
    setTitle(item.title);
    setDescription(item.description);
    setCreateDate(item.createDate);
    setOpenModal(!openModal);
  }

  function toCloseModal() {
    setTitle("");
    setDescription("");
    setCreateDate("");
    setOpenModal(!openModal);
  }

  const renderSlideItems = () => {
    return items.map((item, index) => (
      <Carousel.Item key={index} className="mx-3 hover:scale-105 duration-300">
        <Card compact={true} className="w-72 h-80 border-2">
          <figure className="h-28">
            <Image
              src={"/announcement_picture.jpg"}
              alt="img"
              width={400}
              height={200}
              className="opacity-70 "
            />
          </figure>
          <Card.Body className=" h-5/6 text-left relative line-clamp-4">
            <Card.Title className="line-clamp-1 text-lg">
              {item.title}
            </Card.Title>
            <p className="line-clamp-4">{item.description}</p>

            {/* Optional */}
            {readMoreBtn && (
              <button
                className="btn-primary px-3 py-2 text-sm rounded-md absolute left-4 bottom-3"
                onClick={() => toOpenModal(item)}
              >
                Read more
              </button>
            )}

            {item.createDate !== null && (
              <p className="absolute right-5 bottom-5">{item.createDate}</p>
            )}
          </Card.Body>
        </Card>
      </Carousel.Item>
    ));
  };

  return (
    <div className="relative">
      <Carousel
        id="content"
        className="bg-gray1 w-[85%] mx-auto rounded-lg py-4 flex border-0 items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {renderSlideItems()}
      </Carousel>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button className="btn btn-circle" onClick={scrollLeft}>
          ❮
        </button>
        <button className="btn btn-circle" onClick={scrollRight}>
          ❯
        </button>
      </div>

      <Modal open={openModal} onClickBackdrop={toCloseModal}>
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2"
          onClick={toCloseModal}
        >
          ✕
        </button>
        <Modal.Header className="font-bold text-2xl text-left flex items-center">
          <HiSpeakerphone className="text-red-400" />
          <span className="ml-3">{title}</span>
        </Modal.Header>

        <Modal.Body className="text-left">
          <div className="mb-7">
            <h1 className="font-bold text-lg">Description</h1>
            <p className="text-gray-600">{description}</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Announcement Date</h1>
            <p>{createDate}</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CarouselCustom;
