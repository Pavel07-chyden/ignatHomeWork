import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}
// as

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number])
    };




    // сделать самому, можно подключать библиотеки

    return (
        <>
            <Slider
                style = {{width: "200px"}}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </>
    );
}

export default SuperDoubleRange;
