import BigButton from "./BigButton";

interface BigButtoncontainerProps {

}

const BigButtoncontainer = (props: BigButtoncontainerProps) => {
    return (
        <div className='flex justify-center'>
            <BigButton/>
            <BigButton/>
        </div>
    )
}

export default BigButtoncontainer;