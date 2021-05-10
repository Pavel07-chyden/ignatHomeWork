export const SET_LOADING = "SET_LOADING";

export const initState = {
    isLoading: false,
};
type initialStateType = typeof initState
// берещь тип из возращаемого значения функции
type  ActionType =  ReturnType <typeof loadingAC>

export const loadingReducer = (state = initState, action: ActionType): initialStateType => { // fix any
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: action.loading}
        default:
            return state;
        }
};
                         //as const - ActionType приняла constanty принятая за неизменяемую строку
export const loadingAC = (loading:boolean)  => ({type:SET_LOADING, loading } as const); // fix any
// typeof loadingAC  === (     (loading:boolean)  => {type:"SET_LOADING", loading:boolean }    )