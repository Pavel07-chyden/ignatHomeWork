import React, {useEffect, useState} from "react";
import s from "../h7/common/HW7.module.css";
import { useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {type} from "os";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {loadingAC} from "../h10/bll/loadingReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAC} from "./Request/Request";
import {request} from "./api/tasks-api";

type HRType<T> = [string, (value: string)=>void,(e:React.ChangeEvent<T>)=>void]
function useInput<T extends {value: string} = HTMLInputElement>(initialState: string): HRType<T> {
    const [state, setState] = useState(initialState)
    const onChange = (e: React.ChangeEvent<T>) => setState(e.currentTarget.value);
    return [state, setState, onChange]
}

function HW13() {
    // const data = useRequest()
    // console.log(data)
    const dispatch = useDispatch()
    const success = useSelector<AppStoreType, boolean>(state => state.isReducer.isNew)
    const [inputValue, setValue, onChange] = useInput("")

    const clickButton = () => {
        dispatch(request(success))
    }

    const onChangeChecked = (val: boolean) => {
        dispatch(requestAC(val))
    }
    // dispatch(action) => actionCreator =>  reducer=> combain
    // setTimeout

    return (
        <div>
        <div>
            <h2 className={s.blockTitle}>
                homeworks 13
            </h2>
        </div>

            <SuperCheckbox onChangeChecked={onChangeChecked}/>
            <SuperButton onClick={clickButton} >set loading...</SuperButton>
        </div>
    )
}

export default HW13;
