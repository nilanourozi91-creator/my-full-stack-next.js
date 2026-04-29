"use client";


import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function MySlider() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Slider>
    </div>
  );
}