import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ texto }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fullCollection = !categoryId 
        ? collection(db, 'products') 
        : query(collection(db, 'products'), where('category', '==', categoryId) ) 

    getDocs(fullCollection).then(response => {
        const productsAdapted = response.docs.map (doc => {
            const data = doc.data();
            return { id: doc.id, ...data}
        })
        setProducts(productsAdapted);
    }).catch (error => {
        console.log('error')
    }).finally (() =>{
        setLoading(false)
    })

  }, [categoryId]);

  if (loading) {
    return (
      <div className="listContainer">
        <h1>Cargando...</h1>
      </div>
    );
  } 
      if(products.length === 0) {
        return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    }
    return (
      <>
        <h1 className="listTitle">{texto}</h1>
        <div className="listContainer">
          <ItemList products={products} />
        </div>
      </>
    );
  };

export default ItemListContainer;
