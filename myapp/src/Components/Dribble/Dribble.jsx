import React from "react";
import "./Dribble.css"
import { IoIosArrowForward } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { GoPaste } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { GrCube } from "react-icons/gr";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiDockTop } from "react-icons/bi";

const Dribble=()=>{
    return(
        <div className="container">
            <div className="sub-container">
                <div className="den">
                    <div className="den1">
                        <img src="https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-vector-dental-icon-png-image_1025127.jpg"width={'60px'}height={'67px'}/>
                    </div>
                    <div className="list-customer">
                        <div className="left">
                            <h3>List customer</h3>
                            <h3><IoIosArrowForward /></h3>
                            <h3>Jerome Bellingham</h3>
                        </div>
                        <div className="right">
                            <div className="l">
                                <a><IoSearch /></a>
                                <a><GoBell /></a>
                            </div>
                            <div className="r">
                                <div className="img">
                                    <img src="https://cdn3.vectorstock.com/i/1000x1000/72/17/male-avatar-profile-icon-round-man-face-vector-18307217.jpg"/>
                                </div>
                                <div className="contant">
                                    <a>Alexander Arnold</a><br/>
                                    <a>as a Administrator </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <div className="side-bar">
                        <div className="side-bar1">
                            <p><RxDashboard /></p>
                            <p><GoPaste /></p>
                            <p><FiUser /></p>
                            <p><CiCalendar /></p>
                            <p><GrCube /></p>
                            <p><BiDockTop /></p>
                        </div>
                        <div className="sidebar">
                            <p><FaRegQuestionCircle /></p>
                            <p><IoSettingsOutline /></p>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="c1"></div>
                        <div className="c2"></div>
                        <div className="c3"></div>
                        <div className="c4"></div>
                        <div className="c5"></div>
                        <div className="c6"></div>
                        <div className="c7"></div>
                        <div className="c8"></div>
                    </div>
                    <div className="last">
                        <div className="first">
                            <div className="rows1"></div>
                            <div className="rows2"></div>
                        </div>
                        <div className="second">
                            <div className="row1"></div>
                            <div className="row2"></div>
                            <div className="row3"></div>
                        </div>
                        <div className="third">
                            <div className="ro1">
                                <div className="id">
                                    <div className="t1"></div>
                                    <div className="t2"></div>
                                    <div className="t3"></div>
                                    <div className="t4"></div>
                                    <div className="t5"></div>
                                    <div className="t6"></div>
                                </div>
                            </div>
                            <div className="ro2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dribble;