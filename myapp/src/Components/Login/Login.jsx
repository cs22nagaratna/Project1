import React from "react";
import "./Login.css"

export const Login=()=>{
    return(
        <div className="login">
            <div className="box">
                <h2>CONTACT PAGE TEMPLATE</h2>
            </div>
            <div className="box1">
                <div className="login-left">
                    <div className="m">
                        <div className="contact">
                            <h1>CONTACT</h1>
                        </div>
                        <div className="name">
                            <p>Name</p>
                        </div>
                        <div className="email">
                            <p>Email</p>
                        </div>
                        <div className="message">
                            <p>Message</p>
                        </div>
                        <div className="button">
                            <button>SEND</button>
                        </div>
                        </div>
                    <div className="box2">
                        <h1>INFO</h1>
                        <p>info@companyname.com</p>
                        <p>+26 45 89 23 5</p>
                        <p>17 Name SL</p>
                        <p>09:00 . 18:00</p>
                    </div>
                </div>
            </div>
         </div>
    )
}