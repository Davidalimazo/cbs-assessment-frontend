"use client";

import React from "react";
import Image from "next/image";
import StarRatings from "react-star-ratings";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { PageParams } from "@/interfaces/page_params";
import { increment } from "@/datasource/reducers/cartSlice";
import DetailItem from "@/components/DetailItem";
import useWindowWidth from "@/hooks/useWindowSize";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/interfaces/product";

export default function ProductDetails({ params }: PageParams) {
  const dispatch = useAppDispatch();
  const width = useWindowWidth();
  const { products } = useAppSelector((state) => state.product);
  const product = products.find((e) => e.product_id == params?.id);

  return (
    <>
      <h1 className="my-10 text-center text-xl font-bold">Product Details</h1>
      <div className="flex flex-col gap-4 md:flex-row my-10 px-3">
        <div className="">
          <div className="w-[23rem] h-[25rem] md:w-[30rem] md:h-[30rem]  rounded-sm flex flex-auto items-center justify-center">
            <Image
              src={product?.image ?? ""}
              alt={product?.name ?? ""}
              height={300}
              width={300}
            />
          </div>
        </div>
        <div className="space-y-3 w-full">
          <DetailItem title="Name" value={product?.name ?? ""} />
          <div className="flex flex-row items-center gap-2 w-full">
            <div className="w-[10rem]">Rating:</div>
            <div className="">
              {" "}
              <StarRatings
                rating={product?.rating}
                starDimension="15px"
                starHoverColor="gold"
                starRatedColor="gold"
                changeRating={() => null}
                numberOfStars={5}
                name="rating"
              />
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 w-full">
            <div className="w-[10rem]">Availability:</div>
            <div
              className={`${product?.availability ? "text-green-400" : "text-red-500"}`}
            >{`${product?.availability ? "Available for sale" : "Sold Out"}`}</div>
          </div>
          <DetailItem title="Price" value={`$${product?.price}`} />
          <DetailItem title="Discount" value={`${product?.discount}%`} />
          <DetailItem title="Unit" value={product?.unit ?? ""} />
          <DetailItem title="Brand" value={product?.brand ?? ""} />
          <DetailItem title="Category" value={product?.category ?? ""} />
          <DetailItem title="Description" value={product?.description ?? ""} />
          {product?.reviews ? (
            <div className="flex flex-row items-center gap-2 w-full">
              <div className="w-[10rem]">Reviews:</div>
              <div className="flex flex-col items-start">
                {product.reviews.map((review) => (
                  <div className="">
                    <div className="flex flex-col items-start">
                      <div className="">
                        <StarRatings
                          rating={review.rating}
                          starDimension="15px"
                          starHoverColor="gold"
                          starRatedColor="gold"
                          changeRating={() => null}
                          numberOfStars={5}
                          name="rating"
                        />
                      </div>
                    </div>
                    <div className="">{review.comment}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          <div className="mt-15">
            <Button
              size={`${width < 600 ? "lg" : "default"}`}
              disabled={!product?.availability}
              onClick={() => {
                dispatch(increment(product as IProduct));
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
