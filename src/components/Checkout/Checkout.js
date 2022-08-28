import "./Checkout.css";
import { useState, useContext } from "react";
import CartContext from "../CartContext/CartContext";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  documentId,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import { async } from "@firebase/util";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { getTotalPrice, getQuantity, cart, clearCart } = useContext(CartContext);
  const totalQuantity = getQuantity();
  const total = getTotalPrice();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const createOrder = async () => {
    setIsLoading(true)
    try {
      if (name && email && phone) {
        const objOrder = {
          buyer: {
            name: name,
            phone: phone,
            email: email,
          },
          items: cart,
          totalQuantity,
          total,
          date: new Date(),
        };

        const ids = cart.map((prod) => prod.id);
        const productsRef = collection(db, "prods");
        const produsctsAddedFromFirestore = await getDocs(
          query(productsRef, where(documentId(), "in", ids))
        );
        const { docs } = produsctsAddedFromFirestore;
        const outOfStock = [];
        const batch = writeBatch(db);
        docs.forEach((doc) => {
          const dataDoc = doc.data();
          const stockDb = dataDoc.stock;
          const prodAddedToCart = cart.find((prod) => (prod.id = doc.id));
          const quantityAdded = prodAddedToCart?.quantity;
          if (stockDb >= quantityAdded) {
            batch.update(doc.ref, { stock: stockDb - quantityAdded });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
        if (outOfStock.length === 0) {
          await batch.commit();
          const orderRef = collection(db, "orders");
          const orderAdded = await addDoc(orderRef, objOrder);
          alert(`El ID de su Orden es: ${orderAdded.id}`);
          clearCart()
        } else {
          console.log("Hay Productos que están fuera de stock");
        }
      } else {
        alert("Complete los daros del formulario");
      }
    } catch (error) {
      console.log(error);
    } finally {
        setIsLoading(false)

    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  if (getQuantity() === 0) {
    return <ItemListContainer texto="Listado de Productos" />;
  }
  if (isLoading) {
    return <h1 className="CheckoutTitle">Se está generando la orden</h1>
  }
  return (
    <>
      <h1 className="CheckoutTitle">Checkout</h1>
      <div className="Checkout">
        <div className="cartItem">
          <div className="cartHead">
            <div className="cartCircle"></div>
          </div>

          {/* <div >
              <p> </p>
            </div> */}
          <label className="cartTitle">Nombre: </label>
          <input
            type="text"
            name="name"
            placeholder="Ingrese su nombre"
            onChange={handleNameChange}
            value={name}
            required
            className="cartInput"
          />
        </div>

        <div className="cartItem">
          <div className="cartHead">
            <div className="cartCircle"></div>
          </div>
          <label className="cartTitle">Dirección de Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Ingrese su email"
            onChange={handleEmailChange}
            value={email}
            required
            className="cartInput"
          />
        </div>

        <div className="cartItem">
          <div className="cartHead">
            <div className="cartCircle"></div>
          </div>
          <label className="cartTitle">Número de Teléfono: </label>
          <input
            type="text"
            name="phone"
            placeholder="Ingrese su número de teléfono"
            onChange={handlePhoneChange}
            value={phone}
            required
            className="cartInput"
          />
        </div>

        <div className="cartItem">
          <div className="cartHead">
            <div className="cartCircle"></div>
          </div>
          <div className="cartTitle">
            <p> </p>
          </div>
          <div className="cartPrice">
            <p></p>
          </div>

          <div className="cartPrice">
            <p></p>
          </div>

          <div className="cartCount"></div>

          <div className="order">
            <button className="orderButton" onClick={createOrder}>
              Generar Orden
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
