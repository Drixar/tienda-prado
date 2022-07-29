import { useState } from "react";
import './Counter.css'

const Counter = ({ stock, agregar }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  // console.log('render')
  return (
    <div className="contador">
      <h1>stock {stock} </h1>

      <h1>{count}</h1>
      <div className="botonera">
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
    <div className="agregar">
      <button onClick={() => agregar(count)}>Agregar al Carrito</button>
    </div>
    </div>
  );
};

export default Counter;
