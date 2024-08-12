"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import useWindowWidth from "@/hooks/useWindowSize";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

export default function Navbar() {
  const width = useWindowWidth();
  const [open, setOpen] = useState(false);
  const { products } = useAppSelector((state) => state.cart);

  return (
    <>
      {width < 600 && open ? (
        <div className="w-screen px-3 h-[9rem] bg-gray-100 z-10 absolute flex flex-col gap-3">
          <div className="flex flex-row items-center justify-between">
            <Link href="/" className="text-xl font-bold cursor-pointer">
              CBS Superstore
            </Link>
            <div className="">
              <FaBars onClick={() => setOpen(!open)} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/"
              className="hover:bg-gray-300 text-center border-b-2 border-b-gray-400 block w-full pb-2 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="hover:bg-gray-300 text-center border-b-2 border-b-gray-400 block w-full pb-2 cursor-pointer items-center"
              onClick={() => setOpen(!open)}
            >
              <span className="inline-block">Cart</span>
              <span className="bg-green-300 inline-block text-center items-center rounded-full h-[15px] w-[15px] text-[10px]">
                {products.length}
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <nav className="navbar p-3 flex flex-row items-center justify-between">
          <Link href="/" className="text-xl font-bold cursor-pointer">
            CBS Superstore
          </Link>
          <div className="flex flex-row items-center">
            {width < 600 ? (
              <FaBars onClick={() => setOpen(!open)} />
            ) : (
              <div className="flex flex-row items-center gap-2">
                <Link
                  href="/"
                  className="hover:bg-gray-300 text-center p-1 inline-block rounded-md cursor-pointer"
                >
                  Products
                </Link>
                <Link
                  href="/cart"
                  className="hover:bg-gray-300 text-center p-1 inline-block rounded-md cursor-pointer relative"
                >
                  <span className="pr-1">Cart</span>
                  <span className="bg-green-300 rounded-full h-[15px] w-[15px] text-[10px] absolute top-0 right-0">
                    {products.length}
                  </span>
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  );
}
