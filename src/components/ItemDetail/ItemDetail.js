import "./ItemDetail.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../CartContext/CartContext";

const ItemDetail = ({ id, name, img1, img2, description, price, stock }) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const { addItem, getProductQuantity } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityToAdd(quantity);
    const productToAdd = {
      id,
      name, 
      img1, 
      img2,
      price,
      stock,
      quantity,
    };

    addItem(productToAdd);
  };

  const productQuantity = getProductQuantity(id);

  if (name) {
    return (
      <div className={`detailContainer`}>
        <div className="detail">
          <h1 className="itemTitle">{name}</h1>
          <div className="head">
            <div className="img">
              <img src={img2} alt={name} />
              <img className="top" src={img1} alt="" />
            </div>
          </div>
          <p className="textDescription">{description}</p>
          <h1 className="prizeText">Precio: $ {price}</h1>
          <div className="ItemFooter">
            {quantityToAdd === 0 ? (
              <ItemCount
                onAdd={handleOnAdd}
                stock={stock}
                initial={productQuantity}
              />
            ) : (
              <div className="ButtonFooter">
                <Link to="/cart" className="detailButton">
                  Finalizar compra
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`detailContainer`}>
        <h1>Cargando...</h1>
      </div>
    );
  }
};

export default ItemDetail;
