import { useState, createContext} from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log("cart context: "+ typeof cart)

    const addItem = (productToAdd) => {
        console.log('stock en product to add ' + productToAdd.stock)
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(product => {
                if(product.id === productToAdd.id) {
                    const productUpdated = {
                        ...product,
                        quantity: productToAdd.quantity
                    }
                    return productUpdated
                } else {
                    return product
                }
            })

            setCart(cartUpdated)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const newCartWithoutProduct = cart.filter(product => product.id !== id)
        setCart(newCartWithoutProduct)
    }

    const isInCart = (id) => {
        console.log('is in cart' + cart.some(product => product.id === id))
        return cart.some(product => product.id === id)
    }

    const getQuantity = () => {
        let totalQuantity = 0

        cart.forEach(product => {
        totalQuantity += product.quantity
        })

        return totalQuantity
    }

    const getTotalPrice = () => {
        let totalPrice = 0

        cart.forEach(product => {
            totalPrice += (product.quantity * product.price)
        })

        return totalPrice
    }

    const getProductQuantity = (id) => {
        const product = cart.find(product => product.id === id)
        return product?.quantity ? product?.quantity : 0
    }

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, removeItem, clearCart, getProductQuantity, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext