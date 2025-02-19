import React from "react";
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
            <div style={{border:'1px solid black',flex:'2'}}></div>
            <div style={{border:'1px solid black',flex:'2'}}></div>
            <div style={{border:'1px solid black',flex:'2'}}></div>
            <div style={{border:'1px solid black',flex:'2'}}></div>
            <div style={{border:'1px solid black',flex:'2'}}></div>
        </div>
    )
}