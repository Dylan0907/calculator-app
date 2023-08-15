import calculate from "../utills/calculator";

export interface CalculatorState {
    screenNumber: string;
    firstOperand: string;
    operator: string;
    theme: string;
    isFloat: boolean
}

interface Action {
    type:String;
    payload: Payload
}

interface Payload {
    theme: string
    digit: string
    operator: string
}

const initialState : CalculatorState = {
    screenNumber: "0",
    firstOperand: "0",
    operator: "",
    theme: "one",
    isFloat: false
}

export const calculatorReducer = (state : CalculatorState = initialState, action : Action) : CalculatorState => {
    switch (action.type){
        case 'ENTER_DIGIT':
            if (state.isFloat || action.payload.digit !== "." ) {
                return {
                    ...state,
                    isFloat: true,
                    screenNumber: state.screenNumber + action.payload.digit
                }
            } 
            return state
        case 'ENTER_OPERATOR':
            return {
                ...state,
                firstOperand: state.screenNumber,
                operator: action.payload.operator,
                screenNumber: "0" ,
                isFloat: false
            }
        case 'RESET_CALCULATOR':
            return {
                ...state,
                firstOperand: "0",
                operator: "0",
                screenNumber: "0" ,
                isFloat: false 
            }
        case 'CALCULATE_RESULT':
            const result = calculate (state.firstOperand, state.screenNumber, state.operator) + ""
            return {
                ...state,
                firstOperand: result,
                operator: "0",
                screenNumber: result,
                isFloat: false
            }
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: action.payload.theme
            }
        case 'DELETE_DIGIT':
            return {
                ...state,
                screenNumber: state.screenNumber.slice(0, -1)
            }
        default:
            return state
    }
}