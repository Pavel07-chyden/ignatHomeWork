import React, {useCallback} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {loadingAC} from "./bll/loadingReducer";
import {connect, useDispatch, useSelector} from "react-redux";
import {} from "../h8/HW8";
import {AppStoreType} from "./bll/store";
import s from "../h7/common/HW7.module.css";


function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    // useSelector, useDispatch

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    }
    // dispatch(action) => actionCreator =>  reducer=> combain
    // setTimeout

    return (
        <div>
            <h2 className={s.blockTitle}>
                homeworks 10

            </h2>
            {/*should work (должно работать)*/}
            {/*console.log("loading...");*/}
            {loading
                ? (
                    <div className={'button'}>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading} disabled={loading}>set loading...</SuperButton>
                    </div>
                )
            }

            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
        </div>
    );
}

// let mapDispatchToProps = (dispatch) => {
//         return {
//         dispatch(loadingAC())
//         }
// //     }
//     let mapStateToProps = (state) => {
//     return {
//         isLoading: state.loading.isLoading
//     }
//     }
//
//     let mapDispatchToProps = (dispatch)=> {
// return {
//     setNEw: (loading) =>
//         dispatch(loadingAC(loading))
// }
export default (HW10)
