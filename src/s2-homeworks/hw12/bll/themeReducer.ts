type initStateType = {
    themeId: number
}
const initState: initStateType = {
    themeId: 1,
}
export type changeThemeIdType = ReturnType<typeof changeThemeId>;

export const themeReducer = (state:initStateType = initState, action: ActionType): initStateType => { // fix any
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

export type ActionType = { type: 'SET_THEME_ID'; id: number };

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }as const) // fix any