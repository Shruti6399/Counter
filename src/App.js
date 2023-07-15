import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  var [count , setcount] = useState(0)

  function increment(){
    setcount(count++)
  }

  function decrement(){
    setcount(count--)
  }

  function reset(){
    setcount(0)
  }
  return (
    <div className="App">
        <h1>Counter App</h1>
        <div class="counter">
            <button id="increment-btn" onClick={increment}>+</button>
            <div id="counter-value" >{count}</div>
            <button id="decrement-btn" onClick={decrement}>-</button>
        </div>
        <button id="reset" onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
