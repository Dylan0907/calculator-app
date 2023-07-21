import Screen from './components/Screen'
import Top from './components/Top'
import ButtonsContainer from './components/ButtonsContainer'

function App() {
  return (
      <div className='flex flex-col bg-desaturatedBlueMain h-screen'>
        <Top />
        <Screen />
        <ButtonsContainer />
      </div>
  );
}

export default App;
