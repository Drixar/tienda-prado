import './Cart.css'
import CartContext from "../CartContext/CartContext";
import { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import CartTotal from '../CartTotal/CartTotal';

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
            
            {shoppingCart.map(prod => <CartItem key={prod.id} {...prod}/>)}
            <CartTotal />

        </div>
        </>
    )
}

export default Cart