
import React from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'
import App from "./App"


// const data = ms => new Promise(resolve => setTimeout(resolve, ms))

// const onSubmit = async values => {
//     await data(300)
//     window.alert(data(values, 0, 2))
// }

// const App = () => (
//     <div className="ui raised very padded text container segment">
//     <h1 className='ui header' style={{ textAlign: "center"}}>Employed Form</h1>
//     <Form
//     onSubmit={onSubmit}
//     render={({ handleSubmit, form, submitting, pristine, values }) => (
//      <div className='ui container segment'>
//         <form onSubmit={handleSubmit} className="ui form">
//         <div className='ui grid'>
//             <div className='four wide column' >
//             <label>First Name</label>
//             </div>
//             <div className='twelve wide column'>
//             <Field
//                 name="firstName"
//                 component="input"
//                 type="text"
//                 placeholder="First Name"
//                 style={{
//                     flex: "1",
//                     padding: "3px 5px",
//                     fontsize: "1em",
//                     marginleft: "30px",
//                     border: "1px solid #ccc",
//                     borderradius: "3px"}}
//             />
//             </div>
//           <div className='four wide column'>
//           <label>Last Name</label>
//           </div>
//           <div className='twelve wide column'>
//           <Field
//             name="lastName"
//             component="input"
//             type="text"
//             placeholder="Last Name"
//             className="container fluid"
//             style={{
//                 flex: "1",
//                 padding: "3px 5px",
//                 fontsize: "1em",
//                 marginleft: "15px",
//                 border: "1px solid #ccc",
//                 borderradius: "3px",
//                 }}
//           />
//           </div>
//           <div className='four wide column'>
//             <label>Employed</label> </div>
//             <div className='twelve wide column'>
//             <Field name="employed" component="input" type="checkbox" style={{textAlign: "center"}}/>
//           </div>
//           <div className='four wide column'>
//             <label>Education</label> </div>
//           <div className='twelve wide column'>
//             <Field name="Education" component="select" style={{
//                     flex: "1",
//                     padding: "3px 5px",
//                     fontsize: "1em",
//                     marginleft: "15px",
//                     border: "1px solid #ccc",
//                     borderradius: "3px",
//                     }}>
//                 <option />
//                 <option value="school">School</option>
//                 <option value="bachelor">bachelor</option>
//                 <option value="Master">Master</option>
//             </Field>
//             </div>
//             <div  className='four wide column'>
//              <label>Expertise</label></div>
//             <div className='twelve wide column'>
//                 <div className="ui checkbox ">
//                     <label>
//                     <Field
//                         name="Expertise"
//                         component="input"
//                         type="checkbox"
//                         value="HTML"
//                     />{' '}
//                     HTML
//                     </label>
//                     <label>
//                     <Field
//                         name="Expertise"
//                         component="input"
//                         type="checkbox"
//                         value="CSS"
//                     />{' '}
//                     CSS
//                     </label>
//                     <label>
//                     <Field
//                         name="Expertise"
//                         component="input"
//                         type="checkbox"
//                         value="JavaScript"
//                     />{' '}
//                     JavaScript
//                     </label>
//                     <label>
//                     <Field
//                         name="Expertise"
//                         component="input"
//                         type="checkbox"
//                         value="NodeJs"
//                     />{' '}
//                     NodeJs
//                     </label>
//                     <label>
//                     <Field
//                         name="Expertise"
//                         component="input"
//                         type="checkbox"
//                         value="ReactJs"
//                     />{' '}
//                     ReactJs
//                     </label>
//                 </div>
//             </div>
//             <div className='four wide column'>
//                 <label>Preferred Tecnology</label> </div>
//             <div className='twelve wide column'>
//                 <div className="ui radio checkbox">
//                     <label>
//                     <Field
//                         name="Preferred Tecnology"
//                         component="input"
//                         type="radio"
//                         value="Beck End"
//                         className="hidden"
//                     />{' '}
//                     Beck End
//                     </label>
//                     <label>
//                     <Field
//                         name="Preferred Tecnology"
//                         component="input"
//                         type="radio"
//                         value="Front End"
//                         className="hidden"
//                     />{' '}
//                     Front End
//                     </label>
//                     <label>
//                     <Field
//                         name="Preferred Tecnology"
//                         component="input"
//                         type="radio"
//                         value="Full Stack"
//                         className="hidden"
//                     />{' '}
//                     Full Stack
//                     </label>
//                 </div>
//             </div>
//             <div className='four wide column'>
//                 <label>Notes</label> </div>
//             <div className='twelve wide column'>
//                 <Field name="notes" component="textarea" placeholder="Notes" />
//             </div>
//             <div className="eight wide column">
//                 <button type="submit" disabled={submitting || pristine}>
//                     Submit
//                 </button>
//             </div>
//             <div className="eight wide column">
//                     <button
//                         type="button"
//                         onClick={form.reset}
//                         disabled={submitting || pristine}
//                     >
//                         Reset
//                     </button>
//             </div>
//         </div>
//         <pre style={{
//             border: "1px solid #ccc",
//             background: "rgba(0, 0, 0, 0.1)",
//             boxshadow: "inset 1px 1px 3px rgba(0, 0, 0, 0.2)",
//             padding: "20px"
//         }}>{JSON.stringify(values, 0, 2)}</pre>
//       </form>
//      </div>
      
//     )}
//   />
//   </div>

// )

render(<App />, document.getElementById('root'))