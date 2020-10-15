import React from "react";
import s from './Message.module.css'
import {messageDataType} from "./HW1";

type propsType = {
    messageData: messageDataType
}
function Message(props: propsType) {
    return (
        <div className={s.container}>
            <div className={s.avatar}><img src={props.messageData.avatar}/></div>
            <div className={s.messageWrap}>
                <div className={s.author}>{props.messageData.name}</div>
                <p className={s.message}>{props.messageData.message}</p>
                <div className={s.time}>{props.messageData.time}</div>
            </div>

        </div>)
    // <div>
    //     {messages}
    //     <div className={s.container}>
    //         <div className={s.avatar}><img src={props.messageD.avatar}/></div>
    //         <div className={s.messageWrap}>
    //             <div className={s.author}>{props.messageD.name}</div>
    //             <p className={s.message}>{props.messageD.message}</p>
    //             <div className={s.time}>{props.messageD.time}</div>
    //        </div>
    //
    //     </div>


    // </div>
}


export default Message;


// function Message(props: propsType) {

//     const messages = messageD.map(m => {
//             return (
//                 <div key={m.name} className={s.container}>
//                     <div className={s.avatar}><img src={m.avatar}/></div>
//                     <div className={s.messageWrap}>
//                         <div className={s.name}>{m.name}</div>
//                         <p className={s.message}>{m.message}</p>
//                         <div className={s.time}>{m.time}</div>
//                     </div>
//                 </div>
//             )
//         }
//     )