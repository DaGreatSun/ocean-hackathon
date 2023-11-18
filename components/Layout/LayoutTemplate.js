export default function LayoutTemplate({ children }) {
  return (
    <>
      <img
        src={"/assets/img/top.jpg"}
        sizes="100vw"
        style={{
          objectFit: "cover",
          width: "100%",
          height: 250,
        }}
        alt=""
      />
      <div className="relative z-10 -mt-10 sm:mx-0 md:mx-[5%]">{children}</div>
    </>
  );
}
