import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const reducers = {
  auth: authSlice,
  cart: cartSlice,
  product: productSlice,
};

export default reducers;
