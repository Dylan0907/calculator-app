import { useSelector, useDispatch } from "react-redux";
import { CalculatorState } from "../reducers/calculatorReducer";

interface ScreenProps {

}

const Screen = (props: ScreenProps) => {

    const result = useSelector<CalculatorState, number>(state  => state.result);

    return (
        <div className='flex justify-center bg-desaturatedBlueScreen'>{result}</div>
    )
}

export default Screen;