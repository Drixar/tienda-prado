import "./CartTotal.css";
import { useContext } from "react";
import TrashTotal from "../TrashTotal/TrashTotal";
import CartContext from "../CartContext/CartContext";

const CartTotal = ({ id, name, img1, img2, price, stock, quantity }) => {
  const { getTotalPrice } = useContext(CartContext);
  // const totalPriceToPay = getTotalPtice();
  return (
    <div className="cartItem">
      <div className="cartHead">
        <div className="cartCircle"></div>
        {/* <div className="cartImg">
          <img src={img2} alt={name} />
          <img className="cartTop" src={img1} alt="" />
        </div> */}
      </div>
      <div className="cartTitle">
        <p> </p>
      </div>
      <div className="cartPrice">
        <p> </p>
      </div>

      <div className="cartPrice">
        <p>Total:    $ { getTotalPrice() }</p>
      </div>

      <div className="cartCount">

      </div>

      <div className="order">
        <button> Orden de Compra</button>
      </div>
      <TrashTotal />

    </div>
  );
};

export default CartTotal;
