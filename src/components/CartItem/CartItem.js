import "./CartItem.css";
import CartCount from "../CartCount/CartCount";
import TrashWidget from "../TrashWidget/TrashWidget";
import { Getimg } from "../Files/Files";

const CartItem = ({ id, name, img, price, stock, quantity }) => {
  return (
    <div className="cartItem">
      <div className="cartHead">
        <div className="cartCircle"></div>
        <div className="cartImg">
          <img src={Getimg(img[1])} alt={name} />
              <img className="top" src={Getimg(img[0])} alt="" />
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
