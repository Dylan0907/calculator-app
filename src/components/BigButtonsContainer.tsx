import { useSelector ,useDispatch} from "react-redux";
import BigButton from "./BigButton";
import { CalculatorState } from "../reducers/calculatorReducer";
import { Themes } from "../types/themes";
import themes from './css/themes.json'
import { calculateResult, resetCalculator } from "../actions/actions";


const BigButtoncontainer = () => {

    const theme = useSelector<CalculatorState, string>(state  => state.theme);
    const selectedTheme = themes[theme as keyof Themes]

    const dispatch = useDispatch()

    const handleClickReset = () => {
        dispatch(resetCalculator())
    }

    const handleClickResult = () => {
        dispatch(calculateResult())
    }

    return (
        <div className='flex justify-center text-lg'>
            <BigButton text={'RESET'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text} clickEvent={handleClickReset}/>
            <BigButton text={'='} keyStyle={selectedTheme.key} textStyle={selectedTheme.text} clickEvent={handleClickResult}/>
        </div>
    )
}

export default BigButtoncontainer;
