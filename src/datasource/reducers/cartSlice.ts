import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/interfaces/product";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface CartState {
  products: IProduct[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<IProduct>) => {
      // Check if the product already exists in the cart
      const productExists = state.products.some(
        (p) => p.product_id === action.payload.product_id
      );

      if (!productExists) {
        state.products = [...state.products, action.payload];
        toast.success(`${action.payload.name} added to cart`);
      }
      // If the product exists, do nothing
    },
    getCartProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    decrement: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (p) => p.product_id !== action.payload.product_id
      );
    },
  },
});

export const { increment, decrement, getCartProducts } = cartSlice.actions;

export default cartSlice.reducer;
