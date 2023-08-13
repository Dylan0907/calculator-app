export const changeTheme = (newTheme : string) => {
    return {
        type: 'CHANGE_THEME',
        payload : {
            theme : newTheme
        }
    }
}

export const addDigit = (newDigit : string) => {
    return {
        type: 'ENTER_DIGIT',
        payload : {
            digit : newDigit
        }
    }
}

export const deleteDigit = () => {
    return {
        type: 'DELETE_DIGIT',
    }
}




