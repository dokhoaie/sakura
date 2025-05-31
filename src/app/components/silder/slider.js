'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>
            <Image src="/hinh1.jpg"alt="my logo" width={750} height={520} style={{ borderRadius: '25px' }} />
        </h3>
      </div>
      <div>
        <h3>
        <Image src="/hinh3.webp" alt="my logo" width={750} height={520} style={{ borderRadius: '25px' }} />
        </h3>
      </div>
      <div>
        <h3>
        <Image src="/hinh4.jpg" alt="my logo" width={750} height={520} style={{ borderRadius: '25px' }} />
        </h3>
      </div>
      <div>
        <h3>
        <Image src="/hinh5.webp" alt="my logo" width={750} height={520} style={{ borderRadius: '25px' }} />
        </h3>
      </div>
      <div>
        <h3><Image src="/hinh6.jpg" alt="my logo" width={750} height={520} style={{ borderRadius: '25px' }} />
        </h3>
      </div>
      <div>
        <h3>
        <Image src="/hinh7.jpg" alt="my logo" width={750} height={520} style={{ borderRadius: '25px' }} />
        </h3>
      </div>
    </Slider>
  );
}
//*cre : kazacatstore.store*//