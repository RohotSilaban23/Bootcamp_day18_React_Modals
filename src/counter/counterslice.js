import { createSlice } from "@reduxjs/toolkit"


//fungsi untuk menambah, mengurangin dan menreset nilai state
export const counterSlice = createSlice({
  name: 'Counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// meng ekspor fungsi kedalam counterSlice.actions
export const { increment, decrement, reset,incrementByAmount } = counterSlice.actions

//meng ekspor fungsi counterSlice.reducer 
export default counterSlice.reducer
