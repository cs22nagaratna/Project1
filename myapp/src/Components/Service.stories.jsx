import React from "react";
import {Service} from "./Service"

export default{
    title:'Components/Service',
    component:Service,
}
const Template=(args)=><Service {...args}/>
export const payment=Template.bind()