import BigButton from "./BigButton";

interface BigButtoncontainerProps {

}

const BigButtoncontainer = (props: BigButtoncontainerProps) => {
    return (
        <div className='flex justify-center text-lg'>
            <BigButton type='reset' text={'RESET'}/>
            <BigButton type='equal' text={'='}/>
        </div>
    )
}

export default BigButtoncontainer;