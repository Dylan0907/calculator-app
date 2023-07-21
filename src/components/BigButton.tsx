interface BigButtonProps {
    text: String
}

const BigButton = (props: BigButtonProps) => {
    return (
        <button>{props.text}</button>
    )
}

export default BigButton;