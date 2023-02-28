import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterslice'
import { composeWithDevTools } from "@redux-devtools/extension";
//berfungsi untuk menbuat createStore dan reducer dari counterslice
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  window:window.__REDUX_DEVTOOLS_EXTENSION__&&
     window.__REDUX_DEVTOOLS_EXTENSION__() && 
     composeWithDevTools()
})