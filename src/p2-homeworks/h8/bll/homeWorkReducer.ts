import {Actions, initialStateType} from "../HW8";


export const homeWorkReducer = (state: Array<initialStateType>, action: Actions): Array<initialStateType> => {
    switch (action.type) {
        case "sort": {
            let copyState = [...state];
            return copyState.sort((a,b)=> {
                return action.payload === "up"? a.name <= b.name ? -1 : 1 : a.name >= b.name ? -1 : 1;})
        }
        case "check": {
            return state.filter((ft: any) => ft.age >= action.payload)
        }
        default: return state
    }
};
