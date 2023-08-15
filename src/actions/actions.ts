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

export const addOperator = (newOperator : string) => {
    return {
        type: 'ENTER_OPERATOR',
        payload : {
            operator : newOperator
        }
    }
}

export const deleteDigit = () => {
    return {
        type: 'DELETE_DIGIT',
    }
}

export const resetCalculator = () => {
    return {
        type: 'RESET_CALCULATOR',
    }
}

export const calculateResult = () => {
    return {
        type: 'CALCULATE_RESULT',
    }
}




