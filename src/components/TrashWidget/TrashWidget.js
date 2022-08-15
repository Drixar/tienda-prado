import "./TrashWidget.css";
import CartContext from '../CartContext/CartContext';
import { useContext } from "react";


const TrashWidget = ({ id }) => {
  const { removeItem } = useContext(CartContext);
console.log('ID que recibe trashwidget' + id)
  return (
    <button onClick={() => removeItem(id)} className="TrashWidget">
      <img
        src="../images/trash.svg"
        className="trashtImg"
        alt="trash"
      />
      </button>
  );
};

export default TrashWidget;
