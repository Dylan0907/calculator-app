import { useEffect, useState } from "react";
import "./CSS/toggle.css"

interface TopProps {
    
}

const Toggle = (props: TopProps) => {
    const [theme, setTheme] = useState('first');

    useEffect(() => {
        const myElement = document.getElementById(theme);
        if(myElement) {
            myElement.style.opacity = '1';
        }
      });

    const handleClick = (event : React.FormEvent<HTMLInputElement>) => {
        const newTheme = event.currentTarget.id
        const lastElement = document.getElementById(theme)
        const myElement = document.getElementById(newTheme);
        if(myElement && (lastElement !==myElement) && lastElement) {
            myElement.style.opacity = '1';
            lastElement.style.opacity = '0';
            setTheme(newTheme)
        }
      };
    

    return (
        <div className="flex justify-end w-1/2 text-sm">
            <div className="flex items-center mr-4">theme</div>

            <div className="flex flex-col">

                <div className="flex flex-row">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>

                <div className="flex flex-row bg-desaturatedBlueKeyPad tri-state-toggle justify-center">
                    <input id="first" name="toggle"  type="radio" onClick={handleClick}/>
                    <input id="second" name="toggle" type="radio" onClick={handleClick}/>
                    <input id="third" name="toggle" type="radio" onClick={handleClick}/>
                </div>

            </div>
        </div>
    )
}

export default Toggle;