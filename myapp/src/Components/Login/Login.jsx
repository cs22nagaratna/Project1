import react from 'react'
import './Login.css'
import { IoSearch } from "react-icons/io5";

const Login=()=>{
    return(
        <div className='container'>
            <div className='header'>
                <div className='header1'>
                    <a>Let's</a>
                    <span className='search'><IoSearch /></span>
                </div>
                <div className='header2'>
                    <a>Explore Hotels</a>
                </div>
            </div>
            <div className='box'>
                <div className='box1'></div>
                <div className='box1'></div>
                <div className='box1'></div>
                <div className='box1'></div>
            </div>
        </div>
    )
}
export default Login;