import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from "../h7/common/HW7.module.css";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const handleChange = (newValue: number[]) => {
        setValue1(newValue[0]);
        setValue2(newValue[1]);
    };

    return (
        <div>
            <h2 className={s.blockTitle}>
                homeworks 11

            </h2>

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={setValue1} value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange onChangeRange={handleChange} value={[value1,value2]}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
