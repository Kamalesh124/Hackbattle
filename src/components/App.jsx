
import React,{useState} from "react";
import LoginPage from "./LoginPage";
import SignIn from "./SignIn";
import Resetpassword from "./Resetpassword";
import CleaningServices from "./CleaningServices";
import HostelRoom from './HostelRoom';
import SignPage from "./SignPage";

export default function App(){
    const [stage,setStage] = useState('loginPage')

    return(
        <div className="content">
            {stage === 'loginPage' && <LoginPage onProceed={() => { setStage('signIn') }} />}
            {stage === 'signIn' && <SignIn onProceed={()=>{setStage('resetPassword')}}/>}
            {stage === 'resetPassword' && <Resetpassword onProceed={()=>{setStage('cleaningServices')}}/>}
            {stage === 'cleaningServices' && <CleaningServices onProceed={()=>{setStage('hostelRoom')}}/>}
            {stage === 'hostelRoom' && <HostelRoom onProceed={()=>{setStage('signPage')}}/>}
            {stage === 'signPage' && <SignPage onProceed={()=>{setStage('signIn')}}/>}
        </div>
    )
}