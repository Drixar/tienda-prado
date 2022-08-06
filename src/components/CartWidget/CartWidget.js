import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <img src="../images/shoppingcart.svg" className="cartImg" alt="CartWidget" />
      <p className="cartText">10</p>
    </div>
  );
};

export default CartWidget;
