import React, {useState} from "react";
import GreetingContainer from "../GreetingContainer";
import {v1} from "uuid";
import s from "./HW3.module.css"

// types
export type UserType = {
    _id: string; // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string, _id: string) => { // need to fix any
    let newUser = { _id: v1(),  name: name }
        setUsers([newUser, ...users]); // need to fix
    }
    return (
        <div className={s.homeWorkBlock3}>
            <h2 className={s.blockTitle}>homeworks 3</h2>
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            {/*<span>Количество имен: <b>{props.name.length}</b></span>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}

        </div>
    );
}

export default HW3;
