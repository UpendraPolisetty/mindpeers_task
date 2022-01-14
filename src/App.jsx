import './App.css';
import Left from './Components/Left';
import Middle from './Components/Middle';
import Right from './Components/Right';

function App() {
  return (
    <div className="App flex ">
      <Left/>
      <Middle/>
      <Right/>
    </div>
  );
}

export default App;
