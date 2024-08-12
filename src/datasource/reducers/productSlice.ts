import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/interfaces/product";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface ProductState {
  products: IProduct[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      // Check if the product already exists in the cart
      const productExists = state.products.some(
        (p) => p.product_id === action.payload.product_id
      );

      if (!productExists) {
        state.products = [...state.products, action.payload];
        toast.success(`${action.payload.name} added to product`);
      }
      // If the product exists, do nothing
    },
    getProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    removeProduct: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (p) => p.product_id !== action.payload.product_id
      );
    },
  },
});

export const { addProduct, removeProduct, getProducts } = productSlice.actions;

export default productSlice.reducer;
