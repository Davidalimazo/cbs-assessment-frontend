"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import FeaturedProducts from "./FeaturedProducts";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/datasource/reducers/productSlice";
import { useGetProductsListApi } from "@/services/api/productApi";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.product);
  useGetProductsListApi({
    enabled: true,
    onSuccess: (data) => dispatch(getProducts(data)),
  });
  return (
    <main className="mt-5">
      <div className="">
        <FeaturedProducts />
      </div>
      <div className="bg-gray-100 h-full mt-10">
        <h1 className="text-center my-5 p-4 font-bold text-xl">Product List</h1>
        <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2  md:grid-cols-3 place-items-center gap-3">
          {products.map((product) => (
            <ProductCard product={product} key={product.product_id} />
          ))}
        </div>
      </div>
    </main>
  );
}
