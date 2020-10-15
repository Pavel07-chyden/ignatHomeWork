import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: string// need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика) ЧТО ЗА КОМПОНЕНТА ЭТА ?
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    return (
        <div className={s.wrapper}>
            <div className={s.sInput}><input value={name} onChange={setNameCallback} className={s.inputClass}/>


            <button className={s.buttonClass} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
                <div className={s.inputClass}> {error}</div>
            </div>

        </div>
    );
}

export default Greeting;
