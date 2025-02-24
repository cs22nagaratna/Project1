import React from "react";
import "./Dribble.css"
import { IoIosArrowForward } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { IoSearch } from "react-icons/io5";

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
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <div className="side-bar"></div>
                    <div className="middle"></div>
                    <div className="last">
                        <div className="first"></div>
                        <div className="second">
                            <div className="row1"></div>
                            <div className="row2"></div>
                            <div className="row3"></div>
                        </div>
                        <div className="third">
                            <div className="ro1"></div>
                            <div className="ro2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dribble;