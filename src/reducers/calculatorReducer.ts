export interface CalculatorState {
    result: number;
    total: string | null;
    theme: string;
}

interface Action {
    type:String;
    payload: Payload
}

interface Payload {
    theme: string
}

const initialState : CalculatorState = {
    result: 2432423,
    total: null,
    theme: "one"
}

export const calculatorReducer = (state : CalculatorState = initialState, action : Action) : CalculatorState => {
    switch (action.type){
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: action.payload.theme
            }
        default:
            return state
    }
}