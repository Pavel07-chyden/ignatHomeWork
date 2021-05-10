import React from "react";
import Clock from "./Clock";
import s from "../h7/common/HW7.module.css";

function HW9() {
    return (
        <div>
            <h2 className={s.blockTitle}>
                homeworks 9
            </h2>
            {/*should work (должно работать)*/}
            <Clock/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
        </div>
    );
}

export default HW9;
