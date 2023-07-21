import BigButton from "./BigButton";

interface BigButtoncontainerProps {

}

const BigButtoncontainer = (props: BigButtoncontainerProps) => {
    return (
        <div className='flex justify-center gap-4'>
            <BigButton text={'RESET'}/>
            <BigButton text={'='}/>
        </div>
    )
}

export default BigButtoncontainer;