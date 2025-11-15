import Background from './components/background';
import Card from './components/cards';
import LoginSignup from './components/signup';

function App() {
  return (
    <div className="App">
      <Background>
        <LoginSignup />
      </Background>

    </div >
  );
}

export default App;