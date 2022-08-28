import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    getDoc(doc(db, "prods", productId))
      .then((response) => {
        const data = response.data();
        const fullProduct = { id: response.id, ...data };
        setProduct(fullProduct);
      })
      .catch((error) => {
        console.log("error itemDetailContainer");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);
  if (loading) {
    return (
      <div className="listContainer">
        <h1>Cargando...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <ItemDetail {...product} />
      </div>
    );
  }
};

export default ItemDetailContainer;
