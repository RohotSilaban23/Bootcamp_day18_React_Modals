import React from "react";
import ReactDOM  from "react-dom/client";
import { useState } from "react";
//menginport(memanggil) fungsi dari app.js
// import {Navbar, Body} from "./App";


//menbuat fungsi Dom agar tidak perlu mengulang perintah yang sama
// function dom (isi1, isi2) {
//   ReactDOM.render(isi1, document.getElementById(isi2))
// }


//menjalanjan fungsi dom dengan mengirim parameter yang dibutuhkan
// dom(<Navbar/>, 'navbar')
// dom(<Body />, 'root')

const el = document.getElementById("root")
const root = ReactDOM.createRoot(el);

// function App () {
//   // const date = new Date();
//   // const time = date.toLocaleTimeString();
//   return <h1>{new Date().toLocaleTimeString()}</h1>;

// }
// function Coba(props) {
//   return <h2>halo nama Saya {props.nama}, saya Berkerja sebagai {props.pekerjaan}</h2>
// }

function App() {
  const [name, setName] =useState();
  const [work, setWork] =useState();

  const [update, setUpdate] = useState(name)
  const [update2, setUpdate2] = useState(work)
  
 const hendleChanf = (e) => {
    setName(e.target.value )
 }

 const hendle = (e) => {
  setWork(e.target.value)
 }
  // const handleChange =(e) => {}

  const hendleSubmit = ()=> {
   setUpdate(name)
   setUpdate2(work)
  
  }
  return (
    <div>
      <form >
      <label htmlFor="name">Nama</label>
       <input type="text"  name='name' value={name} onChange={hendleChanf} /><br></br>
       <label htmlFor="work">work</label>
       <input type="text"  name='Work' value={work} onChange={hendle}/>
       </form>
       <button onClick={hendleSubmit}>send</button>
       <h1>hi nama saya {update}</h1>
       <h3>Pekerjaan saya adalah {update2}</h3>
       
    </div>
 )
}
// const cek = Coba(nama, pekerjaan)

root.render(<App/>)
