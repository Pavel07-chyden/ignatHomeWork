export const REQUEST_LOADING = "REQUEST_LOADING";

type initialStateType = {
    isNew: boolean,
};

export const initState: initialStateType = {
    isNew: false,
};

type  ActionType = ReturnType<typeof requestAC>;

export const successReducer = (state = initState, action: ActionType): initialStateType => { // fix any
    switch (action.type) {
        case REQUEST_LOADING:
            return {...state, isNew: action.success}
    default:
        return state;
    }
}
//as const - ActionType приняла constanty принятая за неизменяемую строку
export const requestAC = (success: boolean) => {
    return {
        type: REQUEST_LOADING,
        success
    } as const
}



