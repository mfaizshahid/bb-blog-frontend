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

export const store = makeStore();

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
