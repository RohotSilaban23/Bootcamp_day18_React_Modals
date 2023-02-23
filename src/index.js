import React, { useState, useEffect } from "react";
import ReactDOM  from "react-dom/client";


const el = document.getElementById("root")
const root = ReactDOM.createRoot(el);

function App() {
   // untuk menampung data
   const [date, setDate] = useState(new Date())
   
   //unutk menjalnkan fungsi waktu
   useEffect(() => {
      //untuk menset data waktu baru
      function tick()  {
         setDate(
           new Date()
         )
      } 
      
      //untuk interval waktu data baru ajan di set
      let mount = 
         setInterval(() => tick(), 1000)
      
      return () => {
         // unutk menghentikan interval waktu saat mematikan server
         clearInterval(mount);
      };
   });

   

   return (
      <div>
         <h1>hello, world!!</h1>
         <h2>{date.toLocaleTimeString()}</h2>
      </div>
   )
}

root.render(<App />)
