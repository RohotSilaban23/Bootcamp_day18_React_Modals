import React from "react";
import ReactDOM  from "react-dom/client";
// import { useState } from "react";
// import { faker } from '@faker-js/faker';
// import moment from 'moment';

import youtube from "./youtube";
import "./App.css"

//class componen untuk serch data
class SearcBar extends React.Component {
   //maampung kata pencarian dalam term
   constructor(props) {
      super(props);
      this.vidio = React.createRef()
   }

   //mengisi tern dengan kata kunci pencarian
   onFormSubmit = (event) => {
      event.preventDefault();

      this.props.onSubmit(this.vidio.current.value);
   };

   //tampilan search bar
   render() {
      return(
         <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                  <label>Vidio Search</label>
                  <input 
                  type="text"
                  ref={this.vidio}
                  // onChange={(e) => this.setState({ term: e.target.value })
                  // }
                  />
               </div>
            </form>
         </div>
      )
   }
}

const el = document.getElementById("root")
const root = ReactDOM.createRoot(el);

// class Form extends React.Component {
//    constructor(props){
//       super(props);
//       this.state = { velue: ""};

//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//    }

//    handleChange(event) {
//       this.setState({velue : event.target.value});
//    }

//    handleSubmit(event) {
//       alert("A name was submittted :" + this.state.value)
//       event.preventDefault();
//    }

//    render() {
//       return(
//          <div>
//             <form onSubmit={this.handleSubmit}>
//               <label>
//                Name :
//                <input
//                type="text"
//                value={this.state.value}
//                onChange={this.handleChange}/>
//               </label>
//               <input type="submit" velue="Submit"/>
//             </form>
//          </div>
//       )
//    }
// }

//class untuk mencari gambar
class App extends React.Component {
   //untuk manmapung data yang di cari
   state = { vidios : [], selectedVidio: null};



   onSearchSubmit = async (tern) => {
      //mencari data pada data youtube
      console.log(tern);
      const response = await youtube.get("/search", {
         params: {q: tern},
      });
      // console.log(response.data)
       // mengisi hasil data yang didapatkan kedalam vidios
      this.setState({ vidios : response.data.items });
      this.setState({ selectedVidio : response.data.items[0]})
      console.log(response.data.items)
   };

   handleChangeVidio = async(Vidio) => {
      this.setState({ selectedVidio : Vidio})
   }
 
   // tampilan data pada UI
   render() {
      return (
         <div className="ui container" style={ {margintop : "10px"}}>
            <SearcBar onSubmit={this.onSearchSubmit} />
            <div className="ui segment ">
               <div className="ui two column very relaxed grid">
                  <div className="column eleven wide" >
                     <VidioDetail data={this.state.selectedVidio} />
                  </div>
                  <div className="column five wide">
                     <Vidio handleChangeVidio={this.handleChangeVidio} vidio={this.state.vidios}  />
                  </div>
               </div>
           
            </div>
            
           
         </div>
      )
   }
}

class Vidio extends React.Component {
   //Mengeluarkan data dari array dan menampilkannya
   render () { 
      const vidio = this.props.vidio
      const handleChangeVidio = this.props.handleChangeVidio
      console.log(vidio)
      return vidio.map((vid, index)=> (
      <div  className="ui two column grid">
         <div className="row" key={index}>
            <div onClick={() => handleChangeVidio(vid)} className="column">
               <img className="ui small image" 
               src={vid.snippet.thumbnails.medium.url} />
            </div>
            <div className="column">
                  <a>{vid.snippet.title}</a>
            </div>
         </div>
            
      </div>   
           
         
      ));
}
}

class VidioDetail extends React.Component {
   

   render() {
      console.log(this.props.data)
      const vid = this.props.data
      if(!vid){
         return <div>Silahkan Ketikkan Penacrian terlebih Dahulu!!</div>
      }
      const tampil = `https://www.youtube.com/embed/${vid.id.videoId}`;
      return (
         <div>
         <div className="ui embed" >
            <iframe src={tampil} ></iframe>
         </div>
            <div className="content ui segment" >
             <h4 className="ui header">{vid.snippet.title}</h4>
             <p>{vid.snippet.description}</p>

           </div>
         </div>
      )
   }
}


root.render(<App />)