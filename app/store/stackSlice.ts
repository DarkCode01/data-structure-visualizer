import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

interface StackState {
  items: Array<string>;
  counter: number;
}

const initialState: StackState = {
  items: [],
  counter: 0
};

export const callStackSlice = createSlice({
  name: "call",
  initialState,
  reducers: {
    push: (state, action: PayloadAction<string>) => {
      state.items.push(`${action.payload}-${state.counter}`);
      state.counter = state.items.length;
    },
    pop: (state) => {
      state.items.pop();
      state.counter = state.items.length;
    }
  }
});

export const { push, pop } = callStackSlice.actions;

export const selectStack = (state: RootState) => state.call.stack;

export default callStackSlice.reducer;
