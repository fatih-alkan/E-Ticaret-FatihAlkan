import { createSlice } from "@reduxjs/toolkit";

const maskCardNumber = (number) => {
  if (!number) return "";
  const last4 = number.slice(-4);
  return `**** **** **** ${last4}`;
};

const savedPayment = JSON.parse(localStorage.getItem("payment")) || null;

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    payment: savedPayment,
  },
  reducers: {
    setPayment: (state, action) => {
      const maskedPayment = {
        cardName: action.payload.cardName,
        cardNumber: maskCardNumber(action.payload.cardNumber),
        expiry: action.payload.expiry,
      };
      state.payment = maskedPayment;
      localStorage.setItem("payment", JSON.stringify(maskedPayment));
    },
    clearPayment: (state) => {
      state.payment = null;
      localStorage.removeItem("payment");
    },
  },
});

export const { setPayment, clearPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
