export type ThemeColorType = 'dark' | 'red' | 'some';

const initState = {

    backGroundColors: 'some' as ThemeColorType
};

export const themeReducer = (state = initState, action: ReturnType<typeof changeThemeAC>): any => { // fix any
    switch (action.type) {
        case "CHANGE_THEME" :{
            return {...state,
                backGroundColors: action.color
            }
        }
        default: return state;
    }
};

export const changeThemeAC = (color: ThemeColorType) => ({type:"CHANGE_THEME", color} as const); // fix any