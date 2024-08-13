import { IProduct } from "@/interfaces/product";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTotalPrice(products: IProduct[]): number {
  return products.reduce(
    (total, product) =>
      total + (product.price - product.price * (product.discount / 100)),
    0
  );
}


export function removeProductById(
  products: IProduct[],
  id: number
): IProduct[] {
  return products.filter((product) => product.product_id !== id);
}
