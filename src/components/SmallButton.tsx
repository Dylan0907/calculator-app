interface SmallButtonProps {
    text: String,
    redButton?: boolean
}

const orangeButton: string = 'bg-lightGrayishOrangeKey text-grayishBlue m-2 rounded-md'

const redButton: string = 'bg-desaturatedDarkBlueKeys text-white m-2 rounded-md'

const SmallButton = (props: SmallButtonProps) => {
    return (
        <button className={props.redButton ? redButton : orangeButton}>
            {props.text}
        </button>
    )
}

export default SmallButton;