import Background from './components/background';
import Card from './components/cards';

function App() {
  return (
    <div className="App">
      <Background>
        <Card title="Hello" >
          <p>content</p>
        </Card>
      </Background>

    </div >
  );
}

export default App;