import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './components/LoginPage'

export default function Home(){

const [stage, setStage] = useState("loginPage")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LoginPage />
);
}

