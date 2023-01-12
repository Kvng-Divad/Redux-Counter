//import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { actions } from "./redux/store"

function App() {
  const counter = useSelector((state)=> state.counter)
  const dispatch = useDispatch();
  //const {values, setValues} = useState()
  /*const handleChange = () => {
    setValues(values)
  }*/

  const reset =()=>{
    dispatch(actions.reset())
  }
  const increment =()=>{
    dispatch(actions.increment())
  }

  const decrement =()=>{
    dispatch(actions.decrement())
  }

  const addBy =()=>{
    dispatch(actions.addBy(10))
  }
  return (
    <div className="counter">

      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <div className="Buttons">
        <div className="buttons">
          <button  onClick={reset}>Reset</button>
        </div>
        <div className="buttons">
          <button  onClick={increment}>+</button>
          <button  onClick={decrement}>-</button>
        </div>
        <div className="buttons">
         <button  onClick={addBy}> Add By 10</button>
         {/*<input type='number' name='index' id='index' onChange={handleChange}/>*/}
        </div>
        
      </div>

    </div>
  );
}

export default App;
