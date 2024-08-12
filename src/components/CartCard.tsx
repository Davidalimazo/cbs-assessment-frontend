"use client";
import { decrement } from "@/datasource/reducers/cartSlice";
import { useAppDispatch } from "@/hooks/useRedux";
import { IProduct } from "@/interfaces/product";
import Image from "next/image";
import React from "react";
import { MdClose } from "react-icons/md";

export default function CartCard({ product }: { product: IProduct }) {
  const dispatch = useAppDispatch();
  return (
    <div className="col-span-2 border-b-2 border-b-gray-400 pb-2 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center space-x-2">
        <div className="w-[65px] h-[65px] rounded-sm flex items-center">
          <Image
            alt={product.name}
            src={product.image}
            height={100}
            width={100}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <div className="">{product.name}</div>
          <div className="">
            $
            {(product.price - product.price * (product.discount / 100)).toFixed(
              2
            )}{" "}
            after deducting {product.discount}% discount
          </div>
        </div>
      </div>
      <MdClose
        className="cursor-pointer"
        onClick={() => dispatch(decrement(product))}
      />
    </div>
  );
}
