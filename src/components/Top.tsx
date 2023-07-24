interface TopProps {
    
}

const Top = (props: TopProps) => {
    return (
        <div className='flex mb-2'>
            <div className="w-1/2 text-white">calc</div>
            <div className="w-1/2 text-white">theme</div>
        </div>
    )
}

export default Top;