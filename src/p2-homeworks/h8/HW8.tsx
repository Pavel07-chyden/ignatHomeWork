import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "../h7/common/HW7.module.css";

export type initialStateType = {
    _id: number
    name: string
    age: number
}
type sortType = { type: "sort", payload: string }
type checkType = { type: "check", payload: number }

export type Actions = sortType | checkType
const initialPeople: Array<initialStateType> = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            <li>{p.name}</li>
            <li>{p.age}</li>
        </div>
    ))

    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const sortCheck = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))
    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))

    return (
        <div>
            <h2 className={s.blockTitle}>
                homeworks 8

            </h2>

            {/*should work (должно работать)*/}

            {finalPeople}
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={sortCheck}>sort check</SuperButton></div>

            <div></div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
        </div>
    );
}

export default HW8;
