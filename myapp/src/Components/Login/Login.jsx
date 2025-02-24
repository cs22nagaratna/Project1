import react from 'react'
import './Login.css'
import { FaHotel } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdOutlineFlight } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { BiMessageAltDots } from "react-icons/bi";
import { CiViewTimeline } from "react-icons/ci";
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
                <img src='https://i.pinimg.com/736x/53/f2/40/53f240b1941a4d5ecfd179c7091d7d1a.jpg'/>
                <p>Hotel Royal Blue</p>
                <a><IoLocationOutline /></a><br/>
                <a>$480/<a>right<a>4.3(6.8K)</a></a></a>
            </div>
            <div className='ho'>
                <h1>Low Cost Hotels</h1>
            </div>
            <div className='content'>
                <div className='img'>
                    <img src='https://i.pinimg.com/736x/53/f2/40/53f240b1941a4d5ecfd179c7091d7d1a.jpg'/>
                </div>
                <div className='title'>
                    <h3>Warwick Grand Hotel</h3>
                    <p><IoLocationOutline />New Yack</p>
                    <a><CiStar />5.0 (24K)<a>$480/<a>right</a></a></a>
                </div>
            </div>
            <div className='content1'>
                <div className='img1'>
                    <img src='https://i.pinimg.com/736x/53/f2/40/53f240b1941a4d5ecfd179c7091d7d1a.jpg'/>
                </div>
                <div className='title'>
                    <h3>Water Garden Int</h3>
                </div>
            </div>
            <div className='content2'>
                <div className='icon'><IoMdHome /></div>
                <div className='icon'><FaRegHeart /> </div>
                <div className='icon'><CiViewTimeline /></div>
                <div className='icon'><BiMessageAltDots /></div>
                <div className='icon'><IoPersonOutline /></div>
            </div>
        </div>
    )
}
export default Login;