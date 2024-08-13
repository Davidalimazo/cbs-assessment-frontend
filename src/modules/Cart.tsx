"use client";
import React, { useState } from "react";
import { getTotalPrice } from "@/lib/utils";
import CartCard from "@/components/CartCard";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/useRedux";

export default function Cart() {
  const { products } = useAppSelector((state) => state.cart);

  return (
    <div className="">
      <div className="text-center text-xl font-bold my-10">Checkout</div>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-5">
        <div className="col-span-2">
          {products.map((product) => (
            <CartCard product={product} key={product.product_id} />
          ))}
        </div>
        <div className="w-full md:w-[90%] h-[220px] bg-gray-100 rounded-sm">
          <h1 className="text-center text-xl font-bold my-5">Order Summary</h1>
          <div className="space-y-2 px-3">
            <div className="grid grid-rows-1 grid-cols-2">
              <div>Tax</div>
              <div className="">$20</div>
            </div>
            <div className="grid grid-rows-1 grid-cols-2">
              <div>Total</div>
              <div className="">
                ${(getTotalPrice(products) + 20).toFixed(2)}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <Button
                variant="success"
                size="lg"
                disabled={products.length ? false : true}
              >
                Pay Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
