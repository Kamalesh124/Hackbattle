import React from "react";
import '../styles/illness.css'

export default function Illness(){
    return(
        <div>
            <img id="back" src="./back_option.png" alt="" />
    <div class="logo">
         <div class="box-1">
            <img id="clean" src="image 12.png" alt="" />
            <p id="clean_txt">Room Delivery</p>
        </div>
        <img id="logo" src="../new_vit_logo.png" alt="" />
    </div>
    <div class="container-1">
        <p id="first" class="form"><label for="illness">Illness:</label> <input id="illness" type="text" /></p>

        <p id="second" class="form"><label for="certificate">Medical Certificate:</label> <input id="certificate" type="text"/></p>

        <p id="third" class="form"><label for="days">Number of Days to be Delivered:</label> <input id="days" type="text"/></p>

        {/* <p id="fourth">Time Preferred: <input id="txt4" type="text"></p>  */}
        
        <button id="btn">Submit request</button>
    </div>

        </div>
    )
}