import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    username: "",
    number: "",
    location: "",
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.some((el) => +el.id === payload.id)
        ? state.cart.map((el) => {
            if (el.id === payload.id && el.cartQuantity < el.quantity)
              return (el.cartQuantity += 1);
            else return null;
          })
        : state.cart.push({ ...payload, cartQuantity: 1 });
      toast.success("Product added to cart");
    },
    increaseQuantity: (state, { payload }) => {
      state.cart.map((el) => {
        if (+el.id === +payload && el.cartQuantity < el.quantity)
          return (el.cartQuantity += 1);
        else return null;
      });
    },
    decreaseQuantity: (state, { payload }) => {
      state.cart.map((el) => {
        if (el.id === payload && el.cartQuantity > 0)
          return (el.cartQuantity -= 1);
        else return null;
      });
      state.cart = state.cart.filter((el) => el.cartQuantity > 0);
    },
    removeItem: (state, { payload }) => {
      state.cart = state.cart.filter((el) => el.id !== payload);
      toast.success("Product removed");
    },
    clearCart: (state) => {
      state.cart = [];
      toast.success("Cart empty");
    },
    // setInfo: (state, { payload }) => {
    //   state.location = payload.location;
    //   state.number = payload.num;
    //   state.username = payload.fullName;
    // },
    resetCart: (state) => {
      state.cart = [];
      // state.location = "";
      // state.number = "";
      // state.username = "";
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
  setInfo,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
