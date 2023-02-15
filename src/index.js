import React from "react";
import ReactDOM  from "react-dom";
//menginport(memanggil) fungsi dari app.js
import {Navbar, Body} from "./App";


//menbuat fungsi Dom agar tidak perlu mengulang perintah yang sama
function dom (isi1, isi2) {
  ReactDOM.render(isi1, document.getElementById(isi2))
}


//menjalanjan fungsi dom dengan mengirim parameter yang dibutuhkan
dom(<Navbar/>, 'navbar')
dom(<Body />, 'root')
