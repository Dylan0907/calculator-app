import { useSelector } from "react-redux";
import SmallButton from "./SmallButton";
import { CalculatorState } from "../reducers/calculatorReducer";
import { Themes } from "../types/themes";
import themes from './css/themes.json'

const SmallButtoncontainer = () => {

    const theme = useSelector<CalculatorState, string>(state  => state.theme);
    const selectedTheme = themes[theme as keyof Themes]
    
    return (
        <div className="grid grid-cols-4">
            <SmallButton text={'7'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'8'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'9'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton delButton= {true} text={'DEL'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'4'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'5'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'6'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'+'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'1'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'2'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'3'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'-'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'.'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'0'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'/'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'x'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
        </div>
    )
}

export default SmallButtoncontainer;