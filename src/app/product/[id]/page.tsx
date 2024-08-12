import React from "react";
import ProductDetails from "@/modules/ProductDetails";
import { PageParams } from "@/interfaces/page_params";

export default function page({ params }: { params: PageParams }) {
  return <ProductDetails params={params} />;
}
