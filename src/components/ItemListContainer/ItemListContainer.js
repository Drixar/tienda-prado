import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ texto }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])
    console.log(products); 

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