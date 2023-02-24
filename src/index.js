import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./Navbar";
import store from "./store";
import { Provider } from "react-redux";
import Counter from "./counter";

function App() {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/about" exact element={<About/>}></Route>
            <Route path="/contact" exact element={<Contact/>}></Route>
            <Route path="/Counter" exact element={<Counter/>}></Route>
         </Routes>
      </Router>
   )
}


const el = document.getElementById("root")
const root = ReactDOM.createRoot(el);
root.render( <Provider store={store}>
               <App />
            </Provider>)
