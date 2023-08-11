import { ButtonProps } from "../types/button";

const orangeButton: string = 'bg-lightGrayishOrangeKey text-grayishBlue m-2 py-1 px-4 hover:brightness-125 rounded-md border-b-4 border-lightGrayishOrangeKeyShadow'

const delButtonStyle: string = 'bg-desaturatedDarkBlueKeys text-white m-2 text-lg px-4 py-1 hover:brightness-125 rounded-md border-b-4 border-desaturatedDarkBlueKeysShadows'

const SmallButton = (props: ButtonProps) => {
    
    const {text,delButton, keyStyle, textStyle} = props
    const smallButton = document.getElementById(text);

    if(smallButton) {
        if(delButton === true) {
            smallButton.style.backgroundColor = keyStyle.specialKeyBg
            smallButton.style.borderColor = keyStyle.specialKeyShw
        } else {
            smallButton.style.backgroundColor = keyStyle.numberKeyBg
            smallButton.style.borderColor = keyStyle.numberKeyShw
            smallButton.style.color = textStyle.text1
        }
    }

    return (
        <button className={delButton ? delButtonStyle : orangeButton} id={text}>
            {text}
        </button>
    )
}

export default SmallButton;