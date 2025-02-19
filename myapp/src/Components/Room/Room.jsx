import React from "react";
import { CiStar } from "react-icons/ci";
import { RiShareLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";

export const Room=()=>{
    return(
        <div style={{border:'1px solid black',width:'400px',height:'900px',display:'flex',flexDirection:'column'}}>
            <div style={{border:'1px solid black',flex:'1',display:'flex',flexDirection:'column',margin:'10px',borderRadius:'20px'}}>
                <img src="https://i.pinimg.com/736x/38/0b/00/380b004f0d0a976f80b2f54d0f76d2ab.jpg"/>
            </div>
            <div style={{flex:'2',display:'flex',flexDirection:'column',marginLeft:'20px'}}>
                <div style={{flex:'2'}}>
                    <p style={{fontFamily:'arial,sans serif',fontWeight:'bold',fontSize:'23px'}}>Hotel Dark Moon</p>
                </div>
                <div style={{flex:'1'}}>
                    <a style={{fontFamily:'arial,sans serif'}}><IoLocationOutline />Paris,France</a>
                </div>
                <div style={{flex:'1',display:'flex'}}>
                    <a style={{fontFamily:'arial,sans serif'}}><CiStar />4.9 (6.8K review)</a>
                    <a style={{marginLeft:'120px',color:'orange',fontSize:'20px',fontWeight:'bold'}}>$390/</a>
                    <a style={{fontFamily:'arial,sans serif',fontWeight:'bold'}}>night</a>
                </div>
                <div style={{flex:'2'}}>
                    <a style={{fontFamily:'arial,sans sarif',fontWeight:'bold'}}>Hotel Dark Moon, 100 metres from Front <br/>
                        Beach,Bal Motel Vung Tau offers <br/>
                        accommodation with a garden, private 
                        <br/>parking and
                         a shared...<a style={{fontWeight:'bold',color:'orange'}}>Read more</a></a>
                </div>
                <div style={{flex:'1'}}>
                    <p style={{fontFamily:'arial,sans serif',fontWeight:'bold',fontSize:'20px'}}>What We Offer</p>
                </div>
                <div style={{border:'1px solid black',flex:'2',display:'flex',flexDirection:'row'}}>
                    <div style={{border:'1px solid black',flex:'1'}}>
                        
                    </div>
                    <div style={{border:'1px solid black',flex:'1'}}></div>
                    <div style={{border:'1px solid black',flex:'1'}}></div>
                    <div style={{border:'1px solid black',flex:'1'}}></div>
                </div>
                <div style={{borderRadius:'20px', backgroundColor:'orange',flex:'1.5',marginTop:'20px',marginBottom:'20px',marginRight:'20px'}}>
                    <p style={{fontFamily:'arial,sans serif',fontWeight:'bold',fontSize:'20px',color:'wheat',textAlign:'center'}}>Book Now</p>
                </div>
            </div>
         </div>
    )
}