import React from "react";
import '../styles/hostelRoom.css';

export default function HostelRoom(){
    return(<div><div class="logo">
        <img id="logo" src="../new_vit_logo.png" alt="" />
    </div>
    <div class="sect1">
      <img src="Hostel_icon.png" alt="" />
       <p>Hostel Room</p>
    </div>
    <div class="back">
     <img src="back_option.png" alt="" />
    </div>
    <div class="sect2">
        <div class="box" id="clean">
            <img class="image" src="../cleaning_vit.png" alt="" />
             <p class="txt" id="txt1">Cleaning Service</p>
        </div>
        <div class="box" id="laguage">
            <img class="image" src="laguage_icon.png" alt="" />
             <p class="txt" id="txt2">Laguage Transport</p>
        </div>
        <div class="box" id="complain">
            <img class="image" src="Complain1.png" alt="" />
            <p class="txt" id="txt3">Complain</p>
        </div>
        </div>
    </div>)

}