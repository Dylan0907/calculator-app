import { useSelector } from "react-redux";
import { CalculatorState } from "../reducers/calculatorReducer";
import { useEffect } from "react";

interface ScreenProps {
  screenColor: string;
}

const Screen = (props: ScreenProps) => {
  const screenNumber = useSelector<CalculatorState, string>(
    (state) => state.screenNumber,
  );

  useEffect(() => {
    const myElement = document.getElementById("screen-bg");

    if (myElement) {
      myElement.style.backgroundColor = props.screenColor;
    }
  });

  return (
    <div className="flex justify-end rounded-lg mb-4 h-24" id="screen-bg">
      <div className="flex justify-center items-center mx-4">
        {parseFloat(screenNumber)}
      </div>
    </div>
  );
};

export default Screen;
