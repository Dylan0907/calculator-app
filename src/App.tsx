import Screen from './components/Screen'
import Top from './components/Top'
import ButtonsContainer from './components/ButtonsContainer'

function App() {
  return (
      <div className='flex h-screen inset-0 justify-center items-center bg-desaturatedBlueMain text-white'>
        <div className='w-auto'>
          <Top />
          <Screen />
          <ButtonsContainer />
        </div>
      </div>
  );
}

export default App;
