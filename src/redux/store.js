import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import itinerariesSlice from './slices/itinerariesSlice'
import legsSlice from './slices/legsSlice'

const reducer = combineReducers({
  itineraries :itinerariesSlice,
  legs: legsSlice
})

export const store = configureStore({
  reducer: { reducer },
})