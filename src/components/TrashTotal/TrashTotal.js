import "./TrashTotal.css";
import CartContext from '../CartContext/CartContext';
import { useContext } from "react";


const TrashTotal = ({ id }) => {
  const { clearCart } = useContext(CartContext);
console.log('ID que recibe trashwidget' + id)
  return (
    <button onClick={() => clearCart()} className="TrashWidget">
      <img
        src="../images/trash.svg"
        className="trashtImg"
        alt="trash"
      />
      </button>
  );
};

export default TrashTotal;
