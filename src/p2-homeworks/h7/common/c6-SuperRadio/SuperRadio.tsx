import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, useState} from "react";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }


    const mappedOptions: Array<JSX.Element> = options ? options.map((o, i) => ( // map options with key
        <label key={name + "-" + i}>
            <input
                value={o}
                name={name}
                checked={value === o}
                type={"radio"}
                onChange={onChangeCallback}

            />
            {o}
        </label>
    )) : [<div>hello</div>];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
