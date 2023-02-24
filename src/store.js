import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterslice'

//berfungsi untuk menbuat createStore dan reducer dari counterslice
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})