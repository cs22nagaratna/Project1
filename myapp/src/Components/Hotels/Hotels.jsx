import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { BiMessageAltDots } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

export const Hotels=()=>{
    return(
        <div style={{border:'1px solid black',width:'350px',height:'800px',display:'flex',flexDirection:'column'}}>
            <div style={{flex:'1',display:'flex'}}>
                <div style={{flex:'3'}}>
                    <a style={{fontFamily:'Arial,sans serif',fontSize:'25px'}}>Let's</a><br/>
                    <a style={{fontFamily:'Arial,sans serif',fontSize:'30px',fontWeight:'bold'}}>Explore Hotels</a>
                </div>
                <div style={{flex:'1',textAlign:'center',justifyContent:'center',fontSize:'40px'}}><IoSearch /></div>
            </div>
            <div style={{border:'1px solid black',flex:'2'}}></div>
            <div style={{border:'1px solid black',flex:'0.5'}}>
                <a style={{fontFamily:'Arial,sans serif',fontSize:'25px',fontWeight:'bolder'}}>Popular Hotels</a>
            </div>
            <div style={{border:'1px solid black',flex:'2'}}></div>
            <div style={{border:'1px solid black',flex:'0.5'}}>
                <a style={{fontFamily:'Arial,sans serif',fontSize:'25px',fontWeight:'bolder'}}>Low Cost Hotels</a>
            </div>
            <div style={{border:'1px solid black',flex:'1',display:'flex'}}>
                <div style={{border:'1px solid black',flex:'1'}}></div>
                <div style={{border:'1px solid black',flex:'2'}}>
                    <a >Warwlck Grand Hotels</a><br/>
                    <a>New Yak</a>
                    <a>5.0<a>$480/night</a></a>water garder int
                </div>
            </div>
            <div style={{border:'1px solid black',flex:'1.5',display:'flex',flexDirection:'column'}}>
            <div style={{border:'1px solid black',flex:'1',display:'flex'}}>
                <div style={{border:'1px solid black',flex:'1'}}></div>
                <div style={{border:'1px solid black',flex:'2'}}>
                    <a >Water Garder  Int </a>
                </div>
            </div>
                <div style={{border:'1px solid black',flex:'1',display:'flex'}}>
                    <div style={{border:'1px solid black',flex:'1'}}><IoMdHome /></div>
                    <div style={{border:'1px solid black',flex:'1'}}><FaRegHeart /></div>
                    <div style={{border:'1px solid black',flex:'1'}}><CiViewTimeline /></div>
                    <div style={{border:'1px solid black',flex:'1'}}><BiMessageAltDots /></div>
                    <div style={{border:'1px solid black',flex:'1'}}></div>
                </div>
            </div>
        </div>
    )
}