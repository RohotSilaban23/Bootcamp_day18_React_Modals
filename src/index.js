import React from "react";
import ReactDOM  from "react-dom/client";
// import { useState } from "react";
// import { faker } from '@faker-js/faker';
// import moment from 'moment';

import unsplash from "./unsplash";


//class componen untuk serch data
class SearcBar extends React.Component {
   //maampung kata pencarian dalam term
   state = {term: ""};
   

   //mengisi tern dengan kata kunci pencarian
   onFormSubmit = (event) => {
      event.preventDefault();

      this.props.onSubmit(this.state.term)
   };

   //tampilan search bar
   render() {
      return(
         <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                  <label>Image Search</label>
                  <input 
                  type="text"
                  velue={this.state.term}
                  onChange={(e) => this.setState({ term: e.target.value })
                  }/>
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
   state = { images : []};



   onSearchSubmit = async (term) => {
      //mencari data pada data unsplash
      const response = await unsplash.get("/search/photos", {
         params: {query: term},
      });
      // console.log(response.data)
       // mengisi hasil data yang didapatkan kedalam images
      this.setState({ images : response.data.results });
      console.log(response.data.results)
   };
 
   // tampilan data pada UI
   render() {
      return (
         <div className="ui container" style={ {margintop : "10px"}}>
            <SearcBar onSubmit={this.onSearchSubmit} />
            <div className="ui grid">
            <Photos data={this.state.images} />
            </div>
           
         </div>
      )
   }
}

class Photos extends React.Component {
   //Mengeluarkan data dari array dan menampilkannya
   render () {
      console.log(this.props.data)
      return this.props.data.map((image, index)=> (
         <div className="four wide column" key={index}>
           <img className="ui rounded image" 
           src={image.urls.small_s3} 
           alt={image.alt_description} 
           width="300" height="300"/>
         </div>
      ));
}
}


root.render(<App />)