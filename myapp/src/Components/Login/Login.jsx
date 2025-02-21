import react from 'react'
import './Login.css'
import { FaHotel } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdOutlineFlight } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaConciergeBell } from "react-icons/fa";

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
                <div className='box1'>
                    <div className='im'><FaHotel /></div>
                    <div className='te'>Hotel</div>
                </div>
                <div className='box2'>
                    <div className='im'><MdOutlineFlight /></div>
                    <div className='te'>Flight</div>
                </div>
                <div className='box2'>
                    <div className='im'><IoLocationOutline /></div>
                    <div className='te'>Place</div>
                </div>
                <div className='box2'>
                    <div className='im'><FaConciergeBell /></div>
                    <div className='te'>Food</div>
                </div>
            </div>
            <div className='head'>
                <h1>Popular Hotels</h1>
                <a>See all</a>
            </div>
            <div className='hotel'>
                
            </div>
        </div>
    )
}
export default Login;