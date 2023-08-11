import { useSelector } from "react-redux";
import BigButton from "./BigButton";
import { CalculatorState } from "../reducers/calculatorReducer";
import { Themes } from "../types/themes";
import themes from './css/themes.json'

interface BigButtoncontainerProps {

}

const BigButtoncontainer = (props: BigButtoncontainerProps) => {

    const theme = useSelector<CalculatorState, string>(state  => state.theme);
    const selectedTheme = themes[theme as keyof Themes]

    return (
        <div className='flex justify-center text-lg'>
            <BigButton text={'RESET'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <BigButton text={'='} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
        </div>
    )
}

export default BigButtoncontainer;