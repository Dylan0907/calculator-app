import { useSelector } from "react-redux";
import { CalculatorState } from "../reducers/calculatorReducer";

interface ScreenProps {

}

const Screen = (props: ScreenProps) => {

    const result = useSelector<CalculatorState, number>(state  => state.result);

    return (
        <div className='flex justify-end bg-desaturatedBlueScreen rounded-lg mb-4 h-24'>
            <div className="flex justify-center items-center mr-4 text-white">
                {result}
            </div>
        </div>
    )
}

export default Screen;