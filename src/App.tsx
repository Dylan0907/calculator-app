import Screen from './components/Screen'
import Top from './components/Top'
import ButtonsContainer from './components/ButtonsContainer'
import { useSelector } from 'react-redux';
import { CalculatorState } from './reducers/calculatorReducer';
import themes from './components/css/themes.json'
import { Themes } from './types/themes';
import { useEffect } from 'react';

function App() {

  const theme = useSelector<CalculatorState, string>(state  => state.theme);
  const selectedTheme = themes[theme as keyof Themes]

  useEffect(() => {
    const myElement = document.getElementById("main-bg");

    if(myElement) {
        myElement.style.backgroundColor = selectedTheme.background.main;
        myElement.style.color = theme === "one" ? selectedTheme.text.text2 : selectedTheme.text.text1
    }

  });

  return (
      <div className='flex h-screen justify-center items-center text-white' id="main-bg">
        <div className='w-auto'>
          <Top/>
          <Screen screenColor = {selectedTheme.background.screen}/>
          <ButtonsContainer keypadColor={selectedTheme.background.toggleKeypad}/>
        </div>
      </div>
  );
}

export default App;
