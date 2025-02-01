"use client";

import { configureStore } from "@reduxjs/toolkit";

const makeStore = () =>
  configureStore({
    reducer: {},
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export const store = makeStore();
