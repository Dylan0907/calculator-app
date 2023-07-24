import Screen from './components/Screen'
import Top from './components/Top'
import ButtonsContainer from './components/ButtonsContainer'

function App() {
  return (
      <div className='flex fixed inset-0 justify-center items-center flex-col bg-desaturatedBlueMain '>
        <div className='w-auto'>
          <Top />
          <Screen />
          <ButtonsContainer />
        </div>
      </div>
  );
}

export default App;
