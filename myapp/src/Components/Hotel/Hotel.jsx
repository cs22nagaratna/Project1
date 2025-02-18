import React from "react";

export const Hotel=()=>{
    return(
        <div style={{border:'1px solid black',width:'450px',height:'800px',display:'flex',flexDirection:'column'}}>
            <div style={{border:'1px solid black',flex:'1'}}></div>
            <div style={{border:'1px solid black',flex:'2',display:'flex',flexDirection:'column'}}>
                <div style={{border:'1px solid black',flex:'1',display:'flex',flexDirection:'row'}}>
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
                <div style={{border:'1px solid black',flex:'3'}}></div>
                <div style={{border:'1px solid black',flex:'2'}}></div>
            </div>
        </div>
    )
}