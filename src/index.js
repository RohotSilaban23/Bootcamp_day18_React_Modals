import React from "react";
import ReactDOM  from "react-dom/client";
// import { useState } from "react";
import { faker } from '@faker-js/faker';
import moment from 'moment';


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

// function App() {
//   const [name, setName] =useState();
//   const [work, setWork] =useState();

//   const [update, setUpdate] = useState(name)
//   const [update2, setUpdate2] = useState(work)
  
//  const hendleChanf = (e) => {
//     setName(e.target.value )
//  }

//  const hendle = (e) => {
//   setWork(e.target.value)
//  }
//   // const handleChange =(e) => {}

//   const hendleSubmit = ()=> {
//    setUpdate(name)
//    setUpdate2(work)
  
//   }
//   return (
//     <div>
//       <form >
//       <label htmlFor="name">Nama</label>
//        <input type="text"  name='name' value={name} onChange={hendleChanf} /><br></br>
//        <label htmlFor="work">work</label>
//        <input type="text"  name='Work' value={work} onChange={hendle}/>
//        </form>
//        <button onClick={hendleSubmit}>send</button>
//        <h1>hi nama saya {update}</h1>
//        <h3>Pekerjaan saya adalah {update2}</h3>
       
//     </div>
//  )
// }
// const cek = Coba(nama, pekerjaan)


//menbuat array untuk menampung data
const data =[{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   name : faker.name.firstName(),
   Comment : faker.lorem.lines(),
   like: faker.random.numeric()
},
{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   name : faker.name.firstName(),
   Comment : faker.lorem.lines(),
   like: faker.random.numeric()
},
{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   name : faker.name.firstName(),
   Comment : faker.lorem.lines(),
   like: faker.random.numeric()
}
]

// function App(props) {
//    const data = props.date
//    console.log(data)
//    //menarik data dari dalam array, menggunakan map
//    const post = data.map((e) => {
//       // menggunakan moment untuk menbuat format waktu/hari
//       const hari = moment(e.date).startOf('day').fromNow();
//       console.log(hari)
//       //mengebalikan tampilan data yang akan di tampilkan kedalam variabel post
//       return (
//          <div>
//             <div class="comment">
//                <a class="avatar">
//                   <img alt="avatar" src={e.image}/>
//                </a>
//                <div class="content">
//                   <a class="author">{e.name}</a>
//                   <div class="metadata">
//                      <span class="date">{hari }</span>
//                   </div>
//                   <div class="text">{e.Comment}</div>
//                </div>
//             </div>
//          </div>
//       )
//    })
   
//    return (<div>
//       <div class="ui comments">
//          {post}
//       </div>
//    </div>)

// }

// class comenttar 
class CommentContainer extends React.Component {
   //menbuat fungsi like bertambah saat mengklik tombol like
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
      };
   }
   render() {
      return (
        // menampilkan disain ui
         <div className="ui container comments">
            <div className="comment">
               <a href="/" className="avatar">
                  <img alt="avatar" src={this.props.avatar}/>
               </a>
               <div className="content">
                  <a href="/" className="author">
                     {this.props.name}
                  </a>
                  <div className="metadata">
                     <span className="date">
                       {this.props.day} at {this.props.time}
                     </span>
                     <p>| liked : {this.props.like + this.state.count}</p>
                  </div>
                  <div className="text">{this.props.comment}<br></br>
                  <button onClick={() => this.setState({count: this.state.count + 1}) }>Like</button>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

//class comment untuk mengisi data ke kelas CommentContainer
class Comments extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
      };
   }
   //memanggil kelas CommentContainer dan mengisi data dari database/ array
   render() {
      return this.props.data.map((data, index)=> (
         <div className="commentContainer" key={index}>
         
            <CommentContainer
            avatar={data.image}
            name={data.name}
            day ={moment(data.date).format('ddd')}
            time ={moment(data.date).format('LT')}
            comment = {data.Comment} 
            like ={data.like}/>
   
         </div>
      ));
   }
}



class Counting extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         count : 0,
      };
      
   }
   render () {
      return (
         <div className="commentContainer">
            <CommentContainer 
            count = {this.state.count}/>
             <h1>you cliked {this.state.count} times</h1>;
             <button onClick={() => this.setState({count: this.state.count + 1})}>clik on me</button>
         </div>
     );

   }
}


const App = () => {
   //mengirim data kedalam comments/array
   return <div>{<Comments data ={data}/>}</div>;
}

root.render(<App />)
