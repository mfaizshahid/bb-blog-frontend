"use client"; // Ensures this is a Client Component

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ToastContainer } from "react-toastify";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children} <ToastContainer position="top-right" autoClose={5000} />
    </Provider>
  );
}
