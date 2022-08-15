import { useContext } from "react";
import "./CartCount.css";
import CartContext from "../CartContext/CartContext";


const CartCount = ({ id }) => {
  const { addItem, getProductQuantity } = useContext(CartContext);
  const shoppingCart = useContext(CartContext).cart;
  let product = shoppingCart.find((product) => product.id === id);


  const increment = () => {
    if (product.quantity < product.stock) {
      // product = setProductQuantity(product.id, product.quantity + 1)
      const productUpdated = {
        ...product,
        quantity: getProductQuantity(product.id) + 1,
      };
      addItem(productUpdated)
    }
  };

  const decrement = () => {
    if (product.quantity > 1) {
      const productUpdated = {
        ...product,
        quantity: getProductQuantity(product.id) - 1,
      };
      addItem(productUpdated)
    }
  };

  return (
    <div>
      <div className="cartCounter">
        <button className="cartButton" onClick={decrement}>
          -
        </button>
        <p className="cartNumber">{product.quantity}</p>
        <button className="cartButton" onClick={increment}>
          +
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default CartCount;
