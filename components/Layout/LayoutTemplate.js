import {
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLocationPin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function LayoutTemplate({ children }) {
  return (
    <>
      <div className="relative">
        <img
          src={"/assets/img/top.jpg"}
          sizes="100vw"
          style={{
            objectFit: "cover",
            width: "100%",
            height: 350,
            objectPosition: "50% 75%",
          }}
          alt=""
        />
        <div className="absolute inset-x-0 bottom-[40px] w-full px-[10%] py-2.5 text-center text-2xl lg:px-[20%]">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <img
                className="p-3 pl-0"
                src={"/assets/img/logo-turtle.png"}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: 250,
                  objectPosition: "50% 50%",
                }}
                alt=""
              />
            </div>
            <div className="col-span-9">
              <img
                src={"/assets/img/logo.png"}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: 250,
                  objectPosition: "50% 50%",
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 -mt-10 sm:mx-0 md:mx-[5%]">{children}</div>
      <div className="grid grid-cols-1 bg-[#39729e] lg:grid-cols-2">
        <div className="col-span-1 lg:border-r-2 lg:border-r-black">
          <h1 className="py-6 text-center text-2xl text-white">Contact Us</h1>
          <div className="flex place-content-center items-center pb-7">
            <div className="grid grid-cols-1">
              <div className="col-span-1 inline-flex items-center">
                <span className="p-2">
                  <FaLocationPin fill="#ffffff" size={20} />
                </span>
                <span className="w-96 text-white">
                  34, Jalan Dutamas Raya, Segambut, 52100 Kuala Lumpur, Wilayah
                  Persekutuan Kuala Lumpur
                </span>
              </div>
              <div className="col-span-1 inline-flex items-center">
                <span className="p-2">
                  <MdEmail fill="#ffffff" size={20} />
                </span>
                <span className="text-white">oceanhackathonkl@gmail.com</span>
              </div>
              <div className="col-span-1 inline-flex items-center">
                <span className="p-2">
                  <FaPhone fill="#ffffff" size={20} />
                </span>
                <span className="text-white">+60 12-345 6789</span>
              </div>
              <div className="col-span-1 inline-flex items-center">
                <span className="p-2">
                  <FaGlobe fill="#ffffff" size={20} />
                </span>
                <span className="text-white">
                  https://www.campusmer.fr/home-4185-0-0-0.html
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="py-6 text-center text-2xl text-white">Socials</h1>
          <div className="flex place-content-center items-center pb-7">
            <div className="grid grid-cols-1">
              <div className="col-span-1 inline-flex items-center">
                <span className="p-2">
                  <FaFacebook fill="#ffffff" size={20} />
                </span>
                <span className="text-white">@ocean_hackathon_kl</span>
              </div>
              <div className="col-span-1 inline-flex items-center">
                <span className="p-2">
                  <FaInstagram fill="#ffffff" size={20} />
                </span>
                <span className="text-white">@ocean_hackathon_kl</span>
              </div>
              <div className="col-span-1 inline-flex items-center">
                <span className="p-2">
                  <FaYoutube fill="#ffffff" size={20} />
                </span>
                <span className="text-white">@campusmondialdelamer8156</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
