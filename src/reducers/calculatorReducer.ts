export interface CalculatorState {
    screenNumber: string;
    operand1: string;
    operand2: string;
    operator: string;
    total: string | null;
    theme: string;
}

interface Action {
    type:String;
    payload: Payload
}

interface Payload {
    theme: string
    digit: string
}

const initialState : CalculatorState = {
    screenNumber: "0",
    operand1: "0",
    operand2:"0",
    operator: "",
    total: null,
    theme: "one"
}

export const calculatorReducer = (state : CalculatorState = initialState, action : Action) : CalculatorState => {
    switch (action.type){
        case 'ENTER_DIGIT':
            return {
                ...state,
                screenNumber: state.screenNumber + action.payload.digit
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