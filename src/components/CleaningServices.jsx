import React from "react";
import "../styles/cleaningServices.css";

export default function CleaningServices(props) {
  return (
    <div>
      <img id="back" src="./back_option.png" alt=""/>
    <div class="logo">
         <div class="box-1">
            <img id="clean" src="image 12.png" alt=""/>
            <p id="clean_txt">Cleaning Service</p>
        </div>
        <img id="logo" src="../new_vit_logo.png" alt=""/>
    </div>
    <div class="container-1">
        <p id="first">Room Number:  <input id="txt1" type="text"/></p>
            
        <p id="second">Name: <input id="txt2" type="text"/></p>
        
        <p id="third">Reg Number:  <input id="txt3"  type="text"/></p>
            
        <p id="fourth">Time Preferred: <input id="txt4" type="text"/></p>
        
        <button id="btn">Cleaning Request</button>
      </div>
      </div>
  )
}
