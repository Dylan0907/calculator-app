import SmallButton from "./SmallButton";

interface SmallButtoncontainerProps {

}

const SmallButtoncontainer = (props: SmallButtoncontainerProps) => {
    return (
        <div className="grid grid-cols-4 bg-red">
            <SmallButton text={'7'}/>
            <SmallButton text={'8'}/>
            <SmallButton text={'9'}/>
            <SmallButton text={'DEL'}/>
            <SmallButton text={'4'}/>
            <SmallButton text={'5'}/>
            <SmallButton text={'6'}/>
            <SmallButton text={'+'}/>
            <SmallButton text={'1'}/>
            <SmallButton text={'2'}/>
            <SmallButton text={'3'}/>
            <SmallButton text={'-'}/>
            <SmallButton text={'.'}/>
            <SmallButton text={'0'}/>
            <SmallButton text={'/'}/>
            <SmallButton text={'x'}/>
        </div>
    )
}

export default SmallButtoncontainer;