/* eslint-disable react/no-unknown-property */
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
                <div style={{flex:'1',backgroundColor:'#528d7b',display:'flex',flexDirection:'column'}}>
                    <div style={{flex:'2',display:'flex'}}>
                        <div style={{flex:'1'}}></div>
                        <div style={{border:'1px solid white',flex:'1',borderRadius:'200px',marginTop:'10px',marginBottom:'10px'}}></div>
                        <div style={{flex:'5',paddingTop:'20px',marginLeft:'15px'}}>
                            <a style={{fontFamily:'arial,sans serif',color:'white',fontWeight:'bold',fontSize:'20px'}}>Joana Barros</a><br/>
                            <a style={{fontFamily:'arial,sans serif'}}>Hotel Guest</a>
                        </div>
                        <div style={{border:'1px solid white',flex:'1',borderRadius:'200px',marginTop:'10px',marginBottom:'10px'}}></div>
                        <div style={{flex:'1'}}></div>
                    </div>
                    <div style={{flex:'1'}}>
                        <a style={{fontFamily:'arial,sans serif',color:'white',fontWeight:'bold',fontSize:'20px',marginLeft:'50px'}}>Recommended for you</a><br/>
                    </div>1px solid
                    <div style={{backgroundColor:'white',flex:'3',marginRight:'30px',marginLeft:'30px',borderRadius:'20px',display:'flex'}}>
                        <div style={{border:'1px solid black',flex:'1',borderRadius:'20px'}}>
                            <img src="https://th.bing.com/th?q=Swimming+Pool+Lighting+Decor+Ideas&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"width={'140px'}height={'140px'}borderRadius={'20px'}/>
                        </div>
                        <div style={{flex:'2'}}>
                            <a style={{fontFamily:'arial,sans serif',fontWeight:'bold',color:'#bba027'}}>Enjoy same me time</a><br/>
                            <a style={{fontFamily:'arial,sans serif',fontWeight:'bold',color:'darkgreen'}}>Relax with our massage and<br/>treatments.</a><br/>
                            <a style={{fontFamily:'arial,sans serif'}}>Spa facilities will close in 4 hours</a>
                        </div>
                    </div>
                    <div style={{border:'1px solid red',flex:'1'}}></div>
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
                        <div style={{border:'1px solid #bba027',flex:'1',display:'flex',borderRadius:'30px',margin:'5px'}}>
                            <div style={{flex:'1'}}></div>
                            <div style={{flex:'7'}}>
                                <p style={{fontFamily:'arial,sans serif',color:'#bba027'}}>Faclities</p>
                            </div>
                            <div style={{paddingLeft:'20px', flex:'1',paddingTop:'13px',backgroundColor:"darkgreen",borderRadius:'200px',margin:'5px',marginLeft:'100px',marginRight:'5px'}}>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        <div style={{border:'1px solid #bba027',flex:'1',display:'flex',borderRadius:'30px',margin:'5px'}}>
                            <div style={{flex:'1'}}></div>
                            <div style={{flex:'7'}}>
                                <p style={{fontFamily:'arial,sans serif',color:'#bba027'}}>Virtual Key</p>
                            </div>
                            <div style={{paddingLeft:'20px', flex:'1',paddingTop:'13px',backgroundColor:"darkgreen",borderRadius:'200px',margin:'5px',marginLeft:'100px',marginRight:'5px'}}>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        <div style={{border:'1px solid #bba027',flex:'1',display:'flex',borderRadius:'30px',margin:'5px'}}>
                            <div style={{flex:'1'}}></div>
                            <div style={{flex:'7'}}>
                                <p style={{fontFamily:'arial,sans serif',color:'#bba027'}}>My Room</p>
                            </div>
                            <div style={{paddingLeft:'20px', flex:'1',paddingTop:'13px',backgroundColor:"darkgreen",borderRadius:'200px',margin:'5px',marginLeft:'100px',marginRight:'5px'}}>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        <div style={{border:'1px solid #bba027',flex:'1',display:'flex',borderRadius:'30px',margin:'5px'}}>
                            <div style={{flex:'1'}}></div>
                            <div style={{flex:'7'}}>
                                <p style={{fontFamily:'arial,sans serif',color:'#bba027'}}>Order Room Service</p>
                            </div>
                            <div style={{paddingLeft:'20px', flex:'1',paddingTop:'13px',backgroundColor:"darkgreen",borderRadius:'200px',margin:'5px',marginLeft:'100px',marginRight:'5px'}}>
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