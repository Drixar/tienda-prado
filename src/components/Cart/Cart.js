import './Cart.css'
import CartContext from "../CartContext/CartContext";
import { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Cart = () => {
    const shoppingCart = useContext(CartContext).cart;
    const { getQuantity } = useContext(CartContext);

    console.log("contenido del carrito "+ typeof shoppingCart)
    if (getQuantity() === 0){
        console.log("el carrito está vacio "+shoppingCart)
        return (<ItemListContainer texto='Listado de Productos'/>)
    }
    return (
        <>
        <h1 className='CartTitle'>Carrito de Compras</h1>
        <div className='Cart'>
            {/* <h1>Pagina en Construcción</h1> */}
            {shoppingCart.map(prod => <CartItem key={prod.id} {...prod}/>)}
        </div>
        </>
    )
}

export default Cart