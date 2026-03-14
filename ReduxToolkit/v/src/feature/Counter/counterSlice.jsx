
import { createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
    resetvalue(state, action) {
      state.value = 0 
    },
  },
})

export const { increment, decrement, incrementByAmount, resetvalue } = counterSlice.actions
export default counterSlice.reducer


/// i need a useSelelctor hook , to take a value from store , and to track it in  future when it changes and i need useDispatch to dispatch action to change the value in store