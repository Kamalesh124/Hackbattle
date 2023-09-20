import react from 'react';
import '../styles/signIn.css'

export default function SignIn(props){
  return(<div>
    <div class="box1">
         <img src="image 3.png" alt="" />
         <h2 id="head">Student Login</h2>
    </div>
    <img id="logo" src="new_vit_logo.png" alt="" />
    <div class="main_box">
        <h2>Sign in to your account</h2>
         <input id="user" type="text" placeholder="Enter VTOP USERNAME" />
         <input id="pass" type="password" placeholder="Enter Password" />
         <button id="btn1">Sign in</button>
         <div class="txt">
            <p>Don't have an account? Create one</p>
            <p onClick={()=>{props.onProceed()}}>Forgot Password</p>
        </div>
        <button onClick={()=>{props.onProceed()}}>proceed</button>
    </div>
    
</div>
  )
}