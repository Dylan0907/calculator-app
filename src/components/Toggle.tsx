import { useEffect } from "react";
import "./css/toggle.css"
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../actions/actions";
import themes from './css/themes.json'
import { CalculatorState } from "../reducers/calculatorReducer";
import { Themes } from "../types/themes";


const Toggle = () => {

    const theme = useSelector<CalculatorState, string>(state  => state.theme);
    const selectedTheme = themes[theme as keyof Themes]

    const dispatch = useDispatch();

    useEffect(() => {
        const toggle = document.getElementById(theme);
        const toggleBackground = document.getElementById("toggle-bg");

        if(toggle) {
            toggle.style.opacity = '1';
            toggle.style.backgroundColor = selectedTheme.key.toggleEqBtn       }

        if(toggleBackground) {
            toggleBackground.style.backgroundColor = selectedTheme.background.toggleKeypad
        }

      });

    const handleClick = (event : React.FormEvent<HTMLInputElement>) => {
        const newTheme = event.currentTarget.id
        const lastTheme = document.getElementById(theme)
        const newElement = document.getElementById(newTheme);
        dispatch(changeTheme(newTheme))
        if((lastTheme !== newElement) && lastTheme) {
            lastTheme.style.opacity = '0';
        }
      };
    

    return (
        <div className="flex justify-end w-1/2 text-xs font-normal">
            <div className="flex items-end justify-end mr-4 mb-1">THEME</div>

            <div className="flex flex-col">

                <div className="flex flex-row space-x-3 ml-1 mb-1 text-xs">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>

                <div className="flex flex-row tri-state-toggle justify-center" id="toggle-bg">
                    <input id="one" name="toggle"  type="radio" onClick={handleClick}/>
                    <input id="two" name="toggle" type="radio" onClick={handleClick}/>
                    <input id="three" name="toggle" type="radio" onClick={handleClick}/>
                </div>

            </div>
        </div>
    )
}

export default Toggle;