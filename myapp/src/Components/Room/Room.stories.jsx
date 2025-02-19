import React from "react";
import {Room} from "./Room"

export default  {
    title:'Components/Room',
    component:Room,
};
const Template=(args)=><Room {...args}/>
export const room=Template.bind()