import './Navbar.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../services/firebase'
import { collection, getDocs } from 'firebase/firestore'

const Navbar = () => {
    const [categoriesList, setCategoryList] = useState([]);
    useEffect(() => {
        const collectionCategories = collection(db, 'categories');
        getDocs(collectionCategories).then ((response) => {
            const categoriesList = response.docs.map((categ) => {
                return {
                    id: categ.id,
                    ...categ.data()
                }
            });
            setCategoryList(categoriesList);
        })
    },[])


    return (
        <nav className='Navbar'>
            <div className="Categories">
                {categoriesList.map ((category) => 
                    (<Link key={category.id} to={category.path} className="Option">{category.name}</Link>)
                )}
            </div>
        </nav>
    )
}

export default Navbar