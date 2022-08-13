import "./CartWidget.css";
import CartContext from '../CartContext/CartContext';
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  const quantity = getQuantity();
  return (
    // <div className="cartWidget">
    //   <img src="../images/shoppingcart.svg" className="cartImg" alt="CartWidget" />
    //   <p className="cartText">{ quantity }</p>
    // </div>
    <Link to="/cart" className="CartWidget">
      <img
        src="../images/shoppingcart.svg"
        className="cartImg"
        alt="CartWidget"
      />
      <p className="cartText">{quantity}</p>
    </Link>
  );
};

export default CartWidget;
