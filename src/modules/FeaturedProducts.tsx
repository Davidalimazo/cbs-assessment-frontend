"use client";

import React from "react";
import Slider from "react-slick";
import ProductCard from "@/components/ProductCard";
import useWindowWidth from "@/hooks/useWindowSize";
import { useAppSelector } from "@/hooks/useRedux";

export default function FeaturedProducts() {
  const width = useWindowWidth();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2200,
    accessibility: true,
    arrows: true,
    slidesToShow: width < 600 ? 1 : 3,
    slidesToScroll: width < 600 ? 1 : 3,
  };
  const { products } = useAppSelector((state) => state.product);

  return (
    <div className="my-5">
      <div className="text-center text-xl font-bold">Featured Products</div>
      {
        <Slider {...settings}>
          {products.slice(0, 4).map((product) => (
            <div className="my-5" key={product.product_id}>
              <ProductCard product={product} key={product.product_id} />
            </div>
          ))}
        </Slider>
      }
    </div>
  );
}
