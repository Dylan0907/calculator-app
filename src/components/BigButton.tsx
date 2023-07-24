interface BigButtonProps {
    text: String,
    type:string
}

const reset: string = 'bg-desaturatedDarkBlueKeys w-1/2 m-2 p-2 hover:brightness-150 border-desaturatedDarkBlueKeysShadows rounded text-white border-b-4'

const equal: string = 'bg-redKey rounded flex-grow w-1/2 m-2 hover:brightness-150  text-white border-b-4 border-redKeyShadow'

const BigButton = (props: BigButtonProps) => {
    const style = props.type === 'reset' ? reset : equal
    return (
        <button className={style}>{props.text}</button>
    )
}

export default BigButton;