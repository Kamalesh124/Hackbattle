import React from "react";
import '../styles/loginPage.css'

export default function LoginPage(){
    return(
        <div className='loginPage'>
            <div className='vitLogo'>
                {/* <img src="../photos/vitImage.jpg" alt='vitlogo' /> */}
                <div className='vitPic'></div>
            </div>
            <div className='loginButtons'>
                <button className='studentLogin'>
                    STUDENT LOGIN
                </button>
                <button className='staffLogin'>
                    STAFF LOGIN
                </button>
            </div>
            <div className='haveAnAccount'>Don't have an account?</div>
            <div className='signIn'>Sign in</div>
        </div>
    )
    };