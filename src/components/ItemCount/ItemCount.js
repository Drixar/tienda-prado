import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
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
    <div>

      <div className="botonera">
        <button className="Button" onClick={decrement}>
          -
        </button>
        <h4 className="Number">{count}</h4>
        <button className="Button" onClick={increment}>
          +
        </button>
      </div>
      <div>
      <div className="botonera">
        <button className="AddButton" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
