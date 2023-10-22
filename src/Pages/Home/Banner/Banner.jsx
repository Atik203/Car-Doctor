import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[350px] md:h-[400px] lg:h-[750px] rounded-lg">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full" />
        <div className="absolute h-full w-full left-0 pl-4 md:pl-8 lg:pl-16 pt-4 md:pt-16 lg:pt-40 top-0 space-y-2 md:space-y-5 lg:space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00]">
          <h1 className=" text-2xl md:text-3xl lg:text-6xl text-white font-bold ">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className="text-white text-base md:text-lg max-w-xs md:max-w-md lg:max-w-2xl ">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
            <div>
              <button className="btn bg-red-500 border-none text-white hover:btn-outline hover:border-white">
                Discover More
              </button>
            </div>
            <div>
              <button className="btn btn-outline border-white text-white border-2 hover:bg-red-500 hover:border-none">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute h-full w-full left-0 pl-4 md:pl-8 lg:pl-16 pt-4 md:pt-16 lg:pt-40 top-0 space-y-2 md:space-y-5 lg:space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00]">
          <h1 className=" text-2xl md:text-3xl lg:text-6xl text-white font-bold ">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className="text-white text-base md:text-lg max-w-xs md:max-w-md lg:max-w-2xl ">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
            <div>
              <button className="btn bg-red-500 border-none text-white hover:btn-outline hover:border-white">
                Discover More
              </button>
            </div>
            <div>
              <button className="btn btn-outline border-white text-white border-2 hover:bg-red-500 hover:border-none">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute h-full w-full left-0 pl-4 md:pl-8 lg:pl-16 pt-4 md:pt-16 lg:pt-40 top-0 space-y-2 md:space-y-5 lg:space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00]">
          <h1 className=" text-2xl md:text-3xl lg:text-6xl text-white font-bold ">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className="text-white text-base md:text-lg max-w-xs md:max-w-md lg:max-w-2xl ">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
            <div>
              <button className="btn bg-red-500 border-none text-white hover:btn-outline hover:border-white">
                Discover More
              </button>
            </div>
            <div>
              <button className="btn btn-outline border-white text-white border-2 hover:bg-red-500 hover:border-none">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute h-full w-full left-0 pl-4 md:pl-8 lg:pl-16 pt-4 md:pt-16 lg:pt-40 top-0 space-y-2 md:space-y-5 lg:space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00]">
          <h1 className=" text-2xl md:text-3xl lg:text-6xl text-white font-bold ">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className="text-white text-base md:text-lg max-w-xs md:max-w-md lg:max-w-2xl ">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
            <div>
              <button className="btn bg-red-500 border-none text-white hover:btn-outline hover:border-white">
                Discover More
              </button>
            </div>
            <div>
              <button className="btn btn-outline border-white text-white border-2 hover:bg-red-500 hover:border-none">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />
        <div className="absolute h-full w-full left-0 pl-4 md:pl-8 lg:pl-16 pt-4 md:pt-16 lg:pt-40 top-0 space-y-2 md:space-y-5 lg:space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00]">
          <h1 className=" text-2xl md:text-3xl lg:text-6xl text-white font-bold ">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className="text-white text-base md:text-lg max-w-xs md:max-w-md lg:max-w-2xl ">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
            <div>
              <button className="btn bg-red-500 border-none text-white hover:btn-outline hover:border-white">
                Discover More
              </button>
            </div>
            <div>
              <button className="btn btn-outline border-white text-white border-2 hover:bg-red-500 hover:border-none">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full" />
        <div className="absolute h-full w-full left-0 pl-4 md:pl-8 lg:pl-16 pt-4 md:pt-16 lg:pt-40 top-0 space-y-2 md:space-y-5 lg:space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00]">
          <h1 className=" text-2xl md:text-3xl lg:text-6xl text-white font-bold ">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className="text-white text-base md:text-lg max-w-xs md:max-w-md lg:max-w-2xl ">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
            <div>
              <button className="btn bg-red-500 border-none text-white hover:btn-outline hover:border-white">
                Discover More
              </button>
            </div>
            <div>
              <button className="btn btn-outline border-white text-white border-2 hover:bg-red-500 hover:border-none">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
