import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes, useEffect, useState} from "react";

export type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>


type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        value,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    // const [option, setOption] = useState(value)
    // useEffect(() => {
    //     setOption(value)
    // }, [value])

    const mappedOptions: Array<JSX.Element> = options ? options.map((o, index) => <option key={index}>{o}</option>) : [];

// map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
// debugger
//         setOption(e.currentTarget.value)
        // onChange, onChangeOption
    }

    return (
        <select onChange={onChangeCallback} value={value} {...restProps}>
            {mappedOptions}
        </select>
    );y
}

export default SuperSelect;
