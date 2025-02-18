import React from "react";
import { GiMedicinePills } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export const Hotel=()=>{
    return(
        <div style={{border:'1px solid black',width:'450px',height:'800px',display:'flex',flexDirection:'column'}}>
            <div style={{flex:'1',display:'flex'}}>
                <div style={{flex:'1',backgroundColor:'darkgreen',display:'flex',flexDirection:'column'}}>
                    <div style={{border:'1px solid red',flex:'1'}}></div>
                    <div style={{border:'1px solid red',flex:'2'}}></div>
                </div>
            </div>
            <div style={{flex:'2',display:'flex',flexDirection:'column'}}>
                <div style={{flex:'1',display:'flex',flexDirection:'row'}}>
                    <div style={{flex:'1'}}></div>
                    <div style={{flex:'10',display:'flex',flexDirection:'column'}}>
                        <div style={{flex:'1'}}>
                            <a style={{fontFamily:'arial,sans serif',color:'darkgreen',fontWeight:'bold',marginTop:'5px'}}>Popular experiences</a>
                        </div>
                        <div style={{flex:'2',display:'flex',flexDirection:'row'}}>
                            <div style={{border:'1px solid black',flex:'1',display:'flex',flexDirection:'row',borderRadius:'10px',marginRight:'10px'}}>
                                <div style={{flex:'1'}}></div>
                                <div style={{flex:'3'}}>
                                    <a style={{fontFamily:'arial,sans serif'}}>Bike Riding</a><br/>
                                    <a style={{fontFamily:'arial,sans serif',marginBottom:'30px'}}>Varied tour options</a>
                                </div>
                            </div>
                            <div style={{border:'1px solid black',flex:'1',display:'flex',flexDirection:'row',borderRadius:'10px 0 0 10px'}}>
                                <div style={{flex:'1'}}></div>
                                <div style={{flex:'3'}}>
                                    <a style={{fontFamily:'arial,sans serif'}}>Dinner at the</a><br/>
                                    <a style={{fontFamily:'arial,sans serif'}}>From $30/person</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{flex:'3',display:'flex',flexDirection:'row'}}>
                    <div style={{flex:'1'}}></div>
                    <div style={{flex:'10',display:'flex',flexDirection:'column'}}>
                        <div style={{flex:'1'}}>
                            <p style={{fontFamily:'arial,sans serif',fontWeight:'bold'}}>All service</p>
                        </div>
                        <div style={{border:'1px solid black',flex:'1',display:'flex',borderRadius:'30px',margin:'5px'}}>
                            <div style={{flex:'1'}}></div>
                            <div style={{flex:'7'}}>
                                <p style={{fontFamily:'arial,sans serif',color:'yellow'}}>Faclities</p>
                            </div>
                            <div style={{paddingLeft:'20px', flex:'2',paddingTop:'20px',backgroundColor:"darkgreen",borderRadius:'200px',margin:'5px',marginLeft:'180px',marginRight:'5px'}}>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        <div style={{border:'1px solid black',flex:'1',display:'flex',borderRadius:'30px',margin:'5px'}}>
                            <div style={{flex:'1'}}></div>
                            <div style={{flex:'7'}}>
                                <p style={{fontFamily:'arial,sans serif',color:'yellow'}}>Virtual Key</p>
                            </div>
                            <div style={{paddingLeft:'20px', flex:'2',paddingTop:'20px',backgroundColor:"darkgreen",borderRadius:'200px',margin:'5px',marginLeft:'180px',marginRight:'5px'}}>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        <div style={{border:'1px solid black',flex:'1',display:'flex',borderRadius:'30px',margin:'5px'}}>
                            <div style={{flex:'1'}}></div>
                            <div style={{flex:'7'}}>
                                <p style={{fontFamily:'arial,sans serif',color:'yellow'}}>My Room</p>
                            </div>
                            <div style={{paddingLeft:'20px', flex:'2',paddingTop:'20px',backgroundColor:"darkgreen",borderRadius:'200px',margin:'5px',marginLeft:'180px',marginRight:'5px'}}>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        <div style={{border:'1px solid black',flex:'1',display:'flex',borderRadius:'30px',margin:'5px'}}>
                            <div style={{flex:'1'}}></div>
                            <div style={{flex:'7'}}>
                                <p style={{fontFamily:'arial,sans serif',color:'yellow'}}>Order Room Service</p>
                            </div>
                            <div style={{paddingLeft:'20px', flex:'2',paddingTop:'20px',backgroundColor:"darkgreen",borderRadius:'200px',margin:'5px',marginLeft:'180px',marginRight:'5px'}}>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        <div style={{border:'1px solid black',borderBottom:'white', flex:'1',display:'flex',borderRadius:'30px 30px 0 0',marginRight:'5px',marginLeft:'5px'}}>
                            <div style={{flex:'0.5'}}></div>
                            <div style={{flex:'1',display:'flex',textAlign:'center',marginTop:'20px'}}>
                                <a style={{color:'darkgreen',fontSize:'30PX'}}>06</a>
                            </div>
                            <div style={{flex:'7'}}>
                            <a style={{fontFamily:'Arial,sans serif',display:'flex',marginTop:'25px'}}>Acurenulate points with your stay.</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{flex:'2',display:'flex',flexDirection:'column'}}>
                    <div style={{border:'1px solid black',borderTop:'white', flex:'1',display:'flex',borderRadius:'0 0 30px 30px',marginRight:'5px',marginLeft:'45.5px'}}>
                            <div style={{flex:'0.5'}}></div>
                            <div style={{flex:'1',display:'flex'}}>
                                <a style={{fontFamily:'arial,sans serif',color:'darkgreen'}}>points</a>
                            </div>
                            <div style={{flex:'7'}}>
                            <a style={{fontFamily:'Arial,sans serif',display:'flex'}}>Acurenulate points with your stay.</a>
                            </div>
                        </div>
                    <div style={{flex:'2',display:'flex'}}>
                        <div style={{flex:1,display:'flex',marginRight:'9px',marginLeft:'9px'}}>
                            <div style={{border:'1px solid black',flex:'1',borderRadius:'80px',margin:'10px',textAlign:'center'}}>
                                <FaRegUser />
                            </div>
                        </div>
                        <div style={{flex:1,display:'flex',marginRight:'9px',marginLeft:'9px'}}>
                            <div style={{border:'1px solid black',flex:'1',borderRadius:'80px',margin:'10px',textAlign:'center'}}>
                                <GiMedicinePills />
                            </div>
                        </div>
                        <div style={{flex:1,display:'flex',marginRight:'9px',marginLeft:'9px'}}>
                            <div style={{border:'1px solid black',flex:'1',borderRadius:'80px',margin:'10px',textAlign:'center'}}>
                            <IoHomeOutline />
                            </div>
                        </div>
                        <div style={{flex:1,display:'flex',marginRight:'9px',marginLeft:'9px'}}>
                            <div style={{border:'1px solid black',flex:'1',borderRadius:'80px',margin:'10px',textAlign:'center'}}>
                            <FaGift />
                            </div>
                        </div>
                        <div style={{flex:1,display:'flex',marginRight:'9px',marginLeft:'9px'}}>
                            <div style={{border:'1px solid black',flex:'1',borderRadius:'80px',margin:'10px',textAlign:'center'}}>
                            <FaSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}