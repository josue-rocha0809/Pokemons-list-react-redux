
import logo from './logo.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, incrementByValue} from './store/slices/counter/counterSlice.js'

function App() {

  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> count is: {counter}</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
         Increment
          </button>
        </p>
        <p>
          <button type="button" onClick={() => dispatch(decrement())}>
         Decrement
          </button>
        </p>
        <p>
          <button type="button" onClick={() => dispatch(incrementByValue(2))}>
         Increment by 2
          </button>
        </p>
        
      </header>
    </div>
  )
}

export default App
