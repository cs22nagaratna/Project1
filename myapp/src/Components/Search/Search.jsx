import React from "react";
import "./Search.css"
import { BsThreeDots } from "react-icons/bs";

const Search=()=>{
    return(
        <div className="container1">
            <div className="first">

            </div>
            <div className="second">
                <h2>Data of assurance<a><BsThreeDots /></a></h2>
                <div className="img">
                    <img src="https://w7.pngwing.com/pngs/142/119/png-transparent-quality-premium-certificate-document-folder-paper-data-awards-icon.png"width={'50px'}height={'50px'}/>
                    <h1>234-234-232-32</h1>
                </div>
                
                <div className="card">
                    <div className="expiry">
                        <h3>Expiry</h3>
                        <h2>23/04/2024</h2>

                    </div>
                    <div className="status">
                        <h3>Status</h3>
                        <h3>Actived</h3>
                    </div>
                </div>
            </div>
            <div className="third"></div>
        </div>
    );
}
export default Search;