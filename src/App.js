import React, {useState} from "react";
import Modal from "./modals"
import DataForm from "./form"

const BUTTON_WRAPPER_STYLES = {
    positin: "relative",
    zIndex: 1.
};

const OTHER_CONTENT_STYLES = {
    position : "relative",
    zIndex : 2,
    backgroundColor: "red",
    padding: "10px",
};

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
         <div style={BUTTON_WRAPPER_STYLES} onClick={ () => console.log("cliked")}>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
 
            
            <Modal open={isOpen} onClose={() =>setIsOpen(false)} >
               <DataForm />
            </Modal>
         </div>

         <div style={OTHER_CONTENT_STYLES}>other Contact</div>
        </>
    )
}