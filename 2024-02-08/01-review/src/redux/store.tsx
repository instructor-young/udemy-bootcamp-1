"use client";

import { configureStore } from "@reduxjs/toolkit";
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { cartReducer } from "./slices/cart.slice";
import { utilsReducer } from "./slices/utils.slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    utils: utilsReducer,
  },
});

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
