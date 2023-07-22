interface CalculatorState {
    result: number;
    account: String | null
}

interface Action {
    type:String
}


const initialState : CalculatorState = {
    result: 0,
    account: null
}

export const calculatorReducer = (state : CalculatorState = initialState, action : Action) : CalculatorState => {
    switch (action.type){
        default:
            return state
    }
}