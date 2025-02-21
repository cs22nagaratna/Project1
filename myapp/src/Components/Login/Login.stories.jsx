import React from "react";
import Login from "./Login.jsx"

export default{
    title:'Components/Login',
    component:Login,
};
const Template=(args)=><Login {...args}/>
export const login=Template.bind()