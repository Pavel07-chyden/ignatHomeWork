import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting/Greeting";
import {UserType} from "./HW3/HW3";
import {v1} from "uuid";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string, _id:string) =>void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
        setError('')
    }
    // setName(""); // need to fix
    const addUser = () => {
        if (name.trim()) {
        addUserCallback(name, v1())
            alert(`Hello ${name}`)
            setName("")
        } else {
            alert("Error")
            setError("Error")
            setName("")
        }
    }


    //    почему  users.length;  ? стояло 0.. И КАК В PROPS, приняли за number
    //
    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}
export default GreetingContainer;
