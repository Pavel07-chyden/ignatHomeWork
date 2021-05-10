import React from "react";
import Message from "./Message";
import s from './HW1.module.css'


export const messageData: messageDataType = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};

export type  messageDataType = {
    avatar: string
    name: string
    message: string
    time: string

}

function HW1() {
    return (
        <div className={s.homeWorkBlock1}>
            <h2 className={s.clockTitle}>homeworks 1</h2>
            {/*should work (должно работать)*/}
            <Message messageData={messageData}/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
        </div>
    );
}

export default HW1;

// export const messageD: Array<messageDataType> = [{
//     avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
//     name: "Some Name",
//     message: "some text",
//     time: "22:00",
// },
//     {
//         avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
//         name: "Drugoiq Object",
//         message: "Izmenenie",
//         time: "20:00",
//     }];
