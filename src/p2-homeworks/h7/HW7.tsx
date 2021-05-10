import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import s from "./../h7/common/HW7.module.css";


const arr = [ "x", "y", "z"];

function HW7() {
    const [value, onChangeOption] = useState(arr[1]);

    return (
        <div>
            <h2 className={s.blockTitle}>
            homeworks 7
            </h2>
            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={"radio"}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
        </div>
    );
}

export default HW7;
