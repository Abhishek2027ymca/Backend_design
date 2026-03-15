
import { createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({ // so countwrSlice is a fucntion 
    // createSlcie is a function that takes an object as an argument , aur usme name , initialState , reducers hota hai , aur ye function ek object return krta hai jisme actions aur reducer hota hai
  name: 'counter',  // this is the name of the slice , jo ki store me use hota hai , aur jab bhi action dispatch hota hai to usme type hota hai ki konsa slice ka action hai , aur uske andar reducer function call hota hai
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += Number(action.payload)
    },
    resetvalue(state) {
      state.value = 0 
    },
  },
})

export const { increment, decrement, incrementByAmount, resetvalue } = counterSlice.actions
export default counterSlice.reducer


/// i need a useSelelctor hook , to take a value from store , and to track it in  future when it changes and i need useDispatch to dispatch action to change the value in store