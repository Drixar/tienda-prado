import "./CartTotal.css";
import { useContext } from "react";
import TrashTotal from "../TrashTotal/TrashTotal";
import CartContext from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartTotal = ({ id, name, img1, img2, price, stock, quantity }) => {
  const { getTotalPrice } = useContext(CartContext);

  return (
    <div className="cartItem">
      <div className="cartHead">
        <div className="cartCircle"></div>
      </div>
      <div className="cartTitle">
        <p> </p>
      </div>
      <div className="cartPrice">
        <p> </p>
      </div>

      <div className="cartPrice">
        <p>Total: $ {getTotalPrice()}</p>
      </div>

      <div className="cartCount"></div>

      <div className="order">
        <Link to="/checkout"  className="orderButton">
          Finalizar compra
        </Link>
      </div>
      <TrashTotal />
    </div>
  );
};

export default CartTotal;
