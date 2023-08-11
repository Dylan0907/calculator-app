export const addition = () => {

}

export const changeTheme = (newTheme : string) => {
    return {
        type: 'CHANGE_THEME',
        payload : {
            theme : newTheme
        }
    }
}


