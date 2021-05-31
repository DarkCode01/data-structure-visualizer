import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import callStackSlice from "./stackSlice";

export const store = configureStore({
  reducer: {
    call: callStackSlice
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
