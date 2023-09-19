import react from 'react';
import '../styles/SignIn.css'

export default function SignIn(){
  return(
    <div class="main_box">
    <h2>Sign in to your account</h2>
     <input id="user" type="text" value="VTOP USERNAME" />
     <input id="pass" type="password" value="Password" />
     <button>Sign in</button>
     <div class="txt">
        <p>Don’t have an account? Create one</p>
        <p>Forgot Password</p>
       </div>
     </div>
  )
}