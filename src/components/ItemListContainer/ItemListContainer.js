import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts , getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ texto }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(products => {
            console.log("Ya se cargó")
            setProducts(products)
            
        }).catch(error => {
            console.log(error)
        })
        console.log("Cargando...")
    }, [categoryId])

    return (
        <>
        <h1 className='listTitle'>{texto}</h1>
        <div className='listContainer'>
            <ItemList products={products}/>
        </div>
        </>
    )
}

export default ItemListContainer