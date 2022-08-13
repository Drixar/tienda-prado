import { useState, createContext} from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
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
        return cart.some(product => product.id === id)
    }

    const getQuantity = () => {
        let totalQuantity = 0

        cart.forEach(product => {
        totalQuantity += product.quantity
        })

        return totalQuantity
    }

    const getProductQuantity = (id) => {
        const product = cart.find(product => product.id === id)

        return product?.quantity
    }

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, removeItem, clearCart, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext