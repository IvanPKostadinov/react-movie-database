import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CounterState = {
  counter: number;
  showCounter: boolean;
};


const initialCounterState: CounterState = {
  counter: 0,
  showCounter: true,
};

const CounterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    increase(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  }
});

export const CounterActions = CounterSlice.actions;

export default  CounterSlice.reducer;