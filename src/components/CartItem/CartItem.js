import "./CartItem.css";
import CartCount from "../CartCount/CartCount";
import TrashWidget from "../TrashWidget/TrashWidget";

const CartItem = ({ id, name, img1, img2, price, stock, quantity }) => {
  return (
    <div className="cartItem">
      <div className="cartHead">
        <div className="cartCircle"></div>
        <div className="cartImg">
          <img src={img2} alt={name} />
          <img className="cartTop" src={img1} alt="" />
        </div>
      </div>
      <div className="cartTitle">
        <p>{name}</p>
      </div>
      <div className="cartPrice">
        <p>Precio: $ {price}</p>
      </div>

      <div className="cartPrice">
        <p>Subtotal: $ {price * quantity}</p>
      </div>

      <div className="cartCount">
        <CartCount id={id}>{quantity}</CartCount>
      </div>

      <div className="trash">
        <TrashWidget id={id} className="Option"/>
      </div>
    </div>
  );
};

export default CartItem;
