type InitStateType = {
    themeId: number
}

const initState: InitStateType = {
    themeId: 1
}
export type changeThemeIdType = ReturnType<typeof changeThemeId>
export const themeReducer = (state = initState, action: changeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}


export const changeThemeId = (id: number): any => ({type: 'SET_THEME_ID', id} as const) // fix any
