type initStateType = {
    themeId: number
}
const initState: initStateType = {
    themeId: 1,
}
export type changeThemeIdType = ReturnType<typeof changeThemeId>;
export type ActionsTypes = changeThemeIdType;
export const themeReducer = (state:initStateType = initState, action: ActionsTypes): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID' :
            return {
                ...state,
                themeId: action.id
            }

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }as const) // fix any