import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";

export const Service=()=>{
    return(
        <div style={{border:'1px solid black',width:'500px',height:'1000px',display:'flex'}}>
            <div style={{border:'1px solid black',flex:'1',margin:'25px',borderRadius:'40px',display:'flex',flexDirection:'column'}}>
                <div style={{border:'1px solid black',flex:'1'}}></div>
                <div style={{border:'1px solid black',flex:'1',display:'flex',flexDirection:'column'}}>
                    <div style={{border:'1px solid red',flex:'1',marginRight:'40px',marginLeft:'40px', borderRadius:'0 0 10px 10px'}}>
                        <a style={{fontFamily:'arial ,sans serif',fontSize:'15px'}}><FaLocationDot />Viana do Castelo Portugal<a style={{fontFamily:'arial,sans serif',fontSize:'15px',paddingLeft:'90px'}}>High season</a></a>
                        <div style={{display:'flex',flex:'1'}}>
                            <div style={{flex:'1',border:'1px solid black'}}></div>
                            <div style={{flex:'1',border:'1px solid black'}}></div>
                            <div style={{flex:'1',border:'1px solid black'}}></div>
                            <div style={{flex:'1',border:'1px solid black'}}></div>
                            <div style={{flex:'1',border:'1px solid black'}}></div>
                        </div>
                    </div>
                    <div style={{border:'1px solid red',flex:'2'}}></div>
                    <div style={{border:'1px solid red',flex:'2'}}></div>
                    <div style={{border:'1px solid red',flex:'2'}}></div>
                </div>
            </div>
        </div>
    )
}