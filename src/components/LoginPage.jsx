import React from "react";
import '../styles/loginPage.css'

export default function LoginPage(props){
    return(
        <div className='loginPage'>
            <div className='vitLogo'>
                {/* <img src="../photos/vitImage.jpg" alt='vitlogo' /> */}
                <div className='vitPic'></div>
            </div>
            <div className='loginButtons'>
                <button className='studentLogin'>
                    <div className='studentLoginPic'></div>
                    <div>STUDENT LOGIN</div>
                </button>
                <button className='staffLogin'>
                    <div className='staffLoginPic'></div>
                    <div>STAFF LOGIN</div>
                </button>
            </div>
            <div className='haveAnAccount'>Don't have an account?</div>
            <button className='signIn'>Sign in</button>
            <button onClick={()=>{props.onProceed()}}>proceed</button>
        </div>
    )
    };