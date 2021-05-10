import React, {useEffect, useState} from 'react'
import axios from "axios";
import store from "../../h10/bll/store";
import {Dispatch} from "redux";
import {requestAC} from "../Request/Request";

type postType = {
_id: string,
email: string,
rememberMe: boolean,
isAdmin: boolean,
name: string,
created: string,
updated: string
token: string,
tokenDeathTime: number
}

export const request = (success: boolean) => async (dispatch: Dispatch) => {
        try {
            const res = await axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`,
                {success})

            console.log(res.data)
            dispatch(requestAC(res.data))
        } catch (er) {
            console.log({...er});
            console.log(er.response ? er.response.data.errorText : er.message);
        }
}

