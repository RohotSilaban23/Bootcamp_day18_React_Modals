import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";
import React from "react";
import ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk";

import App from "./components/App"
import reducers from "./reducers"
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__&&
     window.__REDUX_DEVTOOLS_EXTENSION__() && 
     composeWithDevTools()
     ,applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
)