import React from "react";
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {

    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
        <div className={s.wrapperSpan} >
            <span className={s.name}>{props.affair.name}</span>
            <span className={s.priorityStyle}>{props.affair.priority}</span>
            <button className={s.delete} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
