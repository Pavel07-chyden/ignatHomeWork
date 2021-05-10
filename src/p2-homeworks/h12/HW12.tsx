import React from "react";
import s from "./HW12.module.css";
import { useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeAC, ThemeColorType} from "./bll/themeReducer";


const themes: ThemeColorType[] = ['dark', 'red', 'some'];

function HW12() {
    const theme = 'some'; // useSelector

    const someThemes = useSelector<AppStoreType, ThemeColorType>(state => state.someThemes.backGroundColors)

    // useDispatch, onChangeCallback
    const dispatch = useDispatch();


    return (
        <div className={s[someThemes]}>
            <hr/>
            <span className={s[someThemes + '-text']}>
             <h2 className={s.blockTitle}>
                homeworks 12

            </h2>
            </span>
            {/*should work (дофлжно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect
                name={'radio'}
                value={someThemes}
                options={themes}
                onChangeOption={(option) => dispatch(changeThemeAC(option as ThemeColorType))}/>
            <hr/>
        </div>
    );
}

export default HW12;
