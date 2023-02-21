import React from "react";
import ReactDOM  from "react-dom/client";
// import { useState } from "react";
// import { faker } from '@faker-js/faker';
// import moment from 'moment';

import unsplash from "./unsplash";

class SearcBar extends React.Component {
   state = {term: ""};

   onFormSubmit = (event) => {
      event.preventDefault();

      this.props.onSubmit(this.state.term)
   };

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

class App extends React.Component {
   state = { images : []};

   onSearchSubmit = async (term) => {
      const response = await unsplash.get("/search/photos", {
         params: {query: term},
      });
      // console.log(response.data)

      this.setState({ images : response.data.results });
      console.log(response.data.results)
   };

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