interface SmallButtonProps {
    text: String,
    delButton?: boolean
}

const orangeButton: string = 'bg-lightGrayishOrangeKey text-grayishBlue m-2 py-1 px-4 hover:brightness-125 rounded-md border-b-4 border-lightGrayishOrangeKeyShadow'

const delButton: string = 'bg-desaturatedDarkBlueKeys text-white m-2 text-lg px-4 py-1 hover:brightness-125 rounded-md border-b-4 border-desaturatedDarkBlueKeysShadows'

const SmallButton = (props: SmallButtonProps) => {
    return (
        <button className={props.delButton ? delButton : orangeButton}>
            {props.text}
        </button>
    )
}

export default SmallButton;