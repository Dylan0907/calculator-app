import { ButtonProps } from "../types/button";

const BigButton = (props: ButtonProps) => {
    const {text, keyStyle, textStyle} = props
    const bigButton = document.getElementById(text);
    const style: string = 'w-1/2 m-2 p-2 hover:brightness-150 rounded  border-b-4'

    if(bigButton) {
        if(text === "RESET") {
            bigButton.style.backgroundColor = keyStyle.specialKeyBg
            bigButton.style.borderColor = keyStyle.specialKeyShw
            bigButton.style.color = textStyle.text2
        } else {
            bigButton.style.backgroundColor = keyStyle.toggleEqBtn
            bigButton.style.borderColor = keyStyle.toggleEqBtnShw
        }
    }

    return (
        <button className={style} id={text}>{text}</button>
    )
}

export default BigButton;