import Toggle from "./Toggle";

interface TopProps {
    
}

const Top = (props: TopProps) => {
    return (
        <div className='flex mb-2'>
            <div className="w-1/2 text-lg">calc</div>
            <Toggle/>
        </div>
    )
}

export default Top;