"use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authenticationSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      authentication: authReducer,
    },
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export const store = makeStore();
