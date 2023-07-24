import BigButtoncontainer from "./BigButtonsContainer";
import SmallButtoncontainer from "./SmallButtonsContainer";

interface ButtonsContainerProps {
    
}

const ButtonsContainer = (props: ButtonsContainerProps) => {
    return (
        <div className="bg-desaturatedBlueKeyPad rounded-lg p-4 content-center">
            <SmallButtoncontainer />
            <BigButtoncontainer />
        </div>
    )
}

export default ButtonsContainer;