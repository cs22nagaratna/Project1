import React from "react";
import "./Search.css"
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiMobile2 } from "react-icons/ci";
import { LuVideo } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";

const Search=()=>{
    return(
        <div className="container1">
            <div className="first">
                <button><MdOutlineMail /></button>
                <button><IoCallOutline /></button>
                <button><CiMobile2 /></button>
                <button><LuVideo /></button>
                <button><FiEdit /></button>
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
            <div className="third">
                <div className="left">
                    <h2>Member Dentalica</h2>
                    <div className="box">
                        <div className="box1">
                            <div className="progress-circle">
                                <div className="d">
                                    <p>30 <br/>Days</p>
                                </div>
                            </div>
                        </div>
                        <div className="box2">
                            <a>Start Date Joined</a>
                            <h3>12 Des 2023</h3>
                            <button>Extend</button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src="https://belmont-dental.com/wp-content/uploads/2025/01/Invisalign-1-1.jpg"width={'170px'}height={'150px'}/>
                </div>
            </div>
        </div>
    );
}
export default Search;