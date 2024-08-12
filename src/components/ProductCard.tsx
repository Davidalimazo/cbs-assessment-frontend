"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import StarRatings from "react-star-ratings";
import { IProduct } from "@/interfaces/product";
import { useAppDispatch } from "@/hooks/useRedux";
import { increment } from "@/datasource/reducers/cartSlice";

export default function ProductCard({ product }: { product: IProduct }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <div
      className="relative shadow-lg border-2 flex flex-col rounded-md p-3 w-[26rem] h-[26rem]"
      key={product.product_id}
    >
      <div className="absolute left-0 top-0 p-2">
        <StarRatings
          rating={product.rating}
          starDimension="15px"
          starHoverColor="gold"
          starRatedColor="gold"
          changeRating={() => null}
          numberOfStars={5}
          name="rating"
        />
      </div>
      <div className="absolute right-0 top-0 p-2 font-bold">
        ${product.price}
      </div>
      <div className="flex flex-auto items-center justify-center">
        <Image
          alt={product.name}
          src={product.image}
          width={300}
          height={300}
        />
      </div>
      <div className="my-2 text-sm text-gray-500 text-center">
        {product.description.slice(0, 60)}...
      </div>
      <div className="flex flex-row items-center justify-center gap-3">
        <Button onClick={() => router.push(`/product/${product.product_id}`)}>
          View details
        </Button>
        <Button
          variant={"success"}
          onClick={() => {
            dispatch(increment(product));
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
