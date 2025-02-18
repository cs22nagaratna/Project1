import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";

export const Service=()=>{
    return(
        <div style={{border:'1px solid black',width:'500px',height:'1000px',display:'flex'}}>
            <div style={{border:'1px solid black',flex:'1',margin:'25px',borderRadius:'40px',display:'flex',flexDirection:'column'}}>
                <div style={{border:'1px solid black',flex:'1'}}></div>
                <div style={{border:'1px solid black',backgroundColor:'whitesmoke', flex:'1',display:'flex',flexDirection:'column'}}>
                    <div style={{backgroundColor:'white', flex:'1',marginRight:'40px',marginLeft:'40px', borderRadius:'0 0 10px 10px',display:'flex',flexDirection:'column'}}>
                        <div style={{flex:'1'}}>
                            <a style={{fontFamily:'arial ,sans serif',fontSize:'15px'}}><FaLocationDot />Viana do Castelo Portugal<a style={{fontFamily:'arial,sans serif',fontSize:'15px',paddingLeft:'80px'}}>High season</a></a>
                        </div>
                        <div style={{flex:'2',display:'flex'}}>
                            <div style={{flex:'1'}}>3</div>
                            <div style={{flex:'2'}}>2+2</div>
                            <div style={{flex:'1'}}>1</div>
                            <div style={{flex:'3'}}>53.75sqm</div>
                            <div style={{flex:'2'}}></div>
                        </div>
                    </div>
                    <div style={{border:'1px solid red',flex:'2',display:'flex',flexDirection:'column'}}>
                        
                        <div style={{border:'1px solid black',flex:'1'}}>
                            <p style={{fontFamily:'Arial,sans serif',marginLeft:'20px'}}>Accommodations</p>
                        </div>
                        <div style={{border:'1px solid black',flex:'2',display:'flex'}}>
                            <div style={{border:'1px solid black',flex:'1'}}></div>
                            <div style={{border:'1px solid black',flex:'1'}}></div>
                            <div style={{border:'1px solid black',flex:'1'}}></div>
                            <div style={{border:'1px solid black',flex:'1'}}></div>
                            <div style={{border:'1px solid black',flex:'1'}}></div>
                            <div style={{border:'1px solid black',flex:'1'}}></div>
                        </div>
                        <div style={{border:'1px solid black',flex:'2',display:'flex'}}>
                            <div style={{border:'1px solid black',flex:'1'}}>
                                <a style={{fontFamily:'arial,sans serif'}}>Wi-Fi</a>
                            </div>
                            <div style={{border:'1px solid black',flex:'1'}}>
                                <a style={{fontFamily:'arial,sans serif'}}>King size<br/>bed2x2m</a>
                            </div>
                            <div style={{border:'1px solid black',flex:'1'}}>
                            <a style={{fontFamily:'arial,sans serif'}}>M</a>
                            </div>
                            <div style={{border:'1px solid black',flex:'1'}}>
                            <a style={{fontFamily:'arial,sans serif'}}>Wi-Fi</a>
                            </div>
                            <div style={{border:'1px solid black',flex:'1'}}>
                            <a style={{fontFamily:'arial,sans serif'}}>Wi-Fi</a>
                            </div>
                            <div style={{border:'1px solid black',flex:'1'}}>
                            <a style={{fontFamily:'arial,sans serif'}}>Wi-Fi</a>
                            </div>
                        </div>
                    </div>
                    <div style={{flex:'2'}}>
                        <p style={{fontFamily:'arial,sans serif',fontWeight:'bold',marginLeft:'20px'}}>Details</p>
                        <a style={{marginLeft:'20px'}}>Sophiticated and cosy,these suites were<br/>designed envelop your senses,enbling you to<br/>from ypur mind,relax and enjoy a completed
                        <br/>experience.With the </a>
                    </div>
                    <div style={{border:'1px solid red',flex:'1',borderRadius:'200px'}}></div>
                </div>
            </div>
        </div>
    )
}