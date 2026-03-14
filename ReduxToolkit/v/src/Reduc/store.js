
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/Counter/counterSlice'

import React from 'react' 

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});





export default store



// steps 
// create store
// wrap app in provider and pass store as props
// create slice and export reducer and actions
// regisster reducer in store 