import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ texto }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then((products) => {
        console.log("Ya se cargó");
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    console.log("Cargando...");
  }, [categoryId]);

  if (loading) {
    return (
      <div className="listContainer">
        <h1>Cargando...</h1>
      </div>
    );
  } else {
    return (
      <>
        <h1 className="listTitle">{texto}</h1>
        <div className="listContainer">
          <ItemList products={products} />
        </div>
      </>
    );
  }
};

export default ItemListContainer;
