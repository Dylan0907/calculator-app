import { useSelector,useDispatch } from "react-redux";
import SmallButton from "./SmallButton";
import { CalculatorState } from "../reducers/calculatorReducer";
import { Themes } from "../types/themes";
import themes from './css/themes.json'
import { addDigit, deleteDigit } from "../actions/actions";

const SmallButtoncontainer = () => {

    const theme = useSelector<CalculatorState, string>(state  => state.theme);
    const selectedTheme = themes[theme as keyof Themes]

    const dispatch = useDispatch();

    const handleClickNumber = (event : React.FormEvent<HTMLButtonElement>) => {
          dispatch(addDigit(event.currentTarget.id))
    }

    const handleClickOperand= (event : React.FormEvent<HTMLButtonElement>) => {
          
    }

    const handleClickDel= (event : React.FormEvent<HTMLButtonElement>) => {
        dispatch(deleteDigit())
    }
    
    return (
        <div className="grid grid-cols-4">
            <SmallButton text={'7'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text} clickEvent={handleClickNumber}/>
            <SmallButton text={'8'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text} clickEvent={handleClickNumber}/>
            <SmallButton text={'9'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text} clickEvent={handleClickNumber}/>
            <SmallButton delButton= {true} text={'DEL'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}
                         clickEvent={handleClickDel}
            />
            <SmallButton text={'4'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text} clickEvent={handleClickNumber}/>
            <SmallButton text={'5'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text} clickEvent={handleClickNumber}/>
            <SmallButton text={'6'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text} clickEvent={handleClickNumber}/>
            <SmallButton text={'+'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'1'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text} clickEvent={handleClickNumber}/>
            <SmallButton text={'2'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text} clickEvent={handleClickNumber}/>
            <SmallButton text={'3'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text} clickEvent={handleClickNumber}/>
            <SmallButton text={'-'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'.'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'0'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text} clickEvent={handleClickNumber}/>
            <SmallButton text={'/'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
            <SmallButton text={'x'} keyStyle={selectedTheme.key} textStyle={selectedTheme.text}/>
        </div>
    )
}

export default SmallButtoncontainer;