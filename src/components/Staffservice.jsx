import React from "react";
import '../styles/staffService.css'

export default function staffService(props){
    return(
        <div>
            <div class="logo">
        <img id="logo" src="../new_vit_logo.png" alt="" />
    </div>
    <div class="text">Our Services</div>
    <div class="body_box">
        <div class="cont" id="box1">
         <img class="image" src="staff_complaint.png" alt="" />
         <div class="txt1">Complaints</div>
        </div>
        <div class="cont" id="box2">
        <img class="image" src="staff_services.png" alt="" />
        <div class="txt2">Services</div>
        </div>
    </div>

        </div>
    )
}