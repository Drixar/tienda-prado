import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const text = 'hice click'

    const handleClick = () => {
        console.log(text)
    }

    return (
        <nav className='Navbar'>
            <div className="Categories">
                <Link to='/category/Infusiones' className="Option">Infusiones</Link>
                <Link to='/category/Vajilla' className="Option">Vajilla</Link>
                <Link to='/category/Accesorios' className="Option">Accesorios</Link>
            </div>
        </nav>
    )
}

export default Navbar