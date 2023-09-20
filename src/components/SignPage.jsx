import React from "react";
import '../styles/signPage.css';

export default function SignPage(props){
    return(
        <div >
 
    <div class="box1">
         <img src="image 11.png" alt=""/>
         <h2 id="head">Sign up</h2>
    </div>
    <img id="logo" src="new_vit_logo.png" alt="" />
    <div class="main_box">
        <h2>Reset Password</h2>
         <input id="user" type="text" placeholder="OTP"/>
         <input id="pass" type="password" placeholder="New Password"/>
         <input id="pass" type="password" placeholder="Confirm Password"/>
         <button id="btn1">Sign in</button>
         <div class="txt">
            <p id="go_back">Go back to sign in</p>
            <p id="otp">Resend OTP</p>         
        </div>
    </div>
        </div>
    )
}