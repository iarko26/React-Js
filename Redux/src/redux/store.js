import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'

export const store = configureStore({
    //centralized store
  reducer: {
    // slice
    counter:CounterSlice
  },
})