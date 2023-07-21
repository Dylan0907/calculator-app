import Screen from './components/Screen'
import Top from './components/Top'
import ButtonsContainer from './components/ButtonsContainer'

function App() {
  return (
    <div>
      <div className='flex flex-col'>
        <Top />
        <Screen />
        <ButtonsContainer />
      </div>
    </div>
  );
}

export default App;
