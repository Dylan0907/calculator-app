import { useSelector } from "react-redux";
import { CalculatorState } from "../reducers/calculatorReducer";

interface ScreenProps {

}

const Screen = (props: ScreenProps) => {

    const result = useSelector<CalculatorState, number>(state  => state.result);

    return (
        <div className='flex justify-end bg-desaturatedBlueScreen rounded mb-4'>
            <div className="flex mr-4 text-white">
                {result}
            </div>
        </div>
    )
}

export default Screen;