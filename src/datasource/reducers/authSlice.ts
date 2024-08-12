
import { IUser } from '@/interfaces/iuser';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


let user = {} as IUser;
let isAuthenticated = false;


const initialState = {
  user,
  isAuthenticated,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<IUser>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { loginSuccess, setUser } = authSlice.actions;

export default authSlice.reducer;
