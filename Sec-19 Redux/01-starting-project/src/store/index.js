import { legacy_createStore as createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = {counter: 0},action) => {
//     if(action.type === 'increment') {
//         return {
//             counter: state.counter + 1
//         }
//     }

//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter -1
//         }
//     }

//     if(action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter:state.showCounter
//         }
//     }

//     if(action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter:state.counter,
//         }
//     }

//     return state
// }

const store = configureStore({
  reducer: counterReducer.reducer,
});

export const counterActions = counterReducer.actions;

export default store;
