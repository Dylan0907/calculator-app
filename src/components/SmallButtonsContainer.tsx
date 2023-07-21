import SmallButton from "./SmallButton";

interface SmallButtoncontainerProps {

}

const SmallButtoncontainer = (props: SmallButtoncontainerProps) => {
    return (
        <div className="grid grid-cols-4 bg-red">
            <SmallButton />
            <SmallButton />
            <SmallButton />
            <SmallButton />
            <SmallButton />
            <SmallButton />
            <SmallButton />
            <SmallButton />
            <SmallButton />
            <SmallButton />
            <SmallButton />
            <SmallButton />
            <SmallButton />
            <SmallButton />
            <SmallButton />
            <SmallButton />
        </div>
    )
}

export default SmallButtoncontainer;