interface SmallButtonProps {
    text: String
}

const SmallButton = (props: SmallButtonProps) => {
    return (
        <button>{props.text}</button>
    )
}

export default SmallButton;