import React from "react";
import {Hotel} from "./Hotel"

export default{
    title:'./Components/Hotel',
    component:Hotel,
}
const Template=(args)=><Hotel {...args}/>
export const hotel=Template.bind()