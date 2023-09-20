
import './App.css';
import {useState} from 'react';
import Counterbutton from './components/Counterbutton';
import Upgrades from './components/Upgrades';

//Step 1
const App = () => {

  // CounterButton and Upgrades can access these
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <Counterbutton count={count} setCount={setCount} multiplier={multiplier} setMultiplier={setMultiplier}/>
      </div>
        <Upgrades count={count} setCount={setCount} multiplier={multiplier} setMultiplier={setMultiplier}/>
    </div>
  )
}

export default App;