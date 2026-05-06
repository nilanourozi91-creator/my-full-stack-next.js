"use client";


import dynamic from "next/dynamic";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const settings = {
  dots: true,
  infinite: true,
  autoplay:true,
  arrow:false,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function MySlider() {
  return (
    <div className="w-full mx-auto">
      <Slider {...settings} className="">
        <Image src="/images/banner-2.jpg" alt="banner" className="w-full h-full" height={1000} width={1000}></Image>
        <Image src="/images/banner-1.jpg" alt="banner" className="w-full h-full" height={1000} width={1000}></Image>
        <Image src="/images/banner-2.jpg" alt="banner" className="w-full h-full" height={1000} width={1000}></Image>
        <Image src="/images/banner-1.jpg" alt="banner" className="w-full h-full" height={1000} width={1000}></Image>
      </Slider>
    </div>
  );
} 