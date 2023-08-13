import { useEffect } from "react";
import { ButtonProps } from "../types/button";

const SmallButton = (props: ButtonProps) => {
    
    const {text,delButton, keyStyle, textStyle, clickEvent} = props    

    useEffect(() => {
        const smallButton = document.getElementById(text);

        if(smallButton) {
            if(delButton === true) {
                smallButton.style.backgroundColor = keyStyle.specialKeyBg
                smallButton.style.borderColor = keyStyle.specialKeyShw
                smallButton.style.color = textStyle.text2
            } else {
                smallButton.style.backgroundColor = keyStyle.numberKeyBg
                smallButton.style.borderColor = keyStyle.numberKeyShw
                smallButton.style.color = textStyle.text1
            }
        }

    });

    const handleClick = (event : React.FormEvent<HTMLButtonElement>) => {
          
    }


    return (
        <button 
                className={`m-2 py-1 px-4 hover:brightness-125 rounded-md border-b-4 ${delButton && 'text-lg '}`} 
                id={text}
                onClick={clickEvent}
        >
            {text}
        </button>
    )
}

export default SmallButton;