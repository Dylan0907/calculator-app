import { useEffect } from "react";
import BigButtoncontainer from "./BigButtonsContainer";
import SmallButtoncontainer from "./SmallButtonsContainer";

interface ButtonsContainerProps {
  keypadColor: string;
}

const ButtonsContainer = (props: ButtonsContainerProps) => {
  useEffect(() => {
    const keypad = document.getElementById("keypad-bg");

    if (keypad) {
      keypad.style.backgroundColor = props.keypadColor;
    }
  });

  return (
    <div className="rounded-lg p-4 content-center" id={"keypad-bg"}>
      <SmallButtoncontainer />
      <BigButtoncontainer />
    </div>
  );
};

export default ButtonsContainer;
