import './Navbar.css'
import React from 'react'
// import button from '../button/button'


const Navbar = () => {

    const text = 'hice click'

    const handleClick = () => {
        console.log(text)
    }

    return (
        <nav className="Navbar">
                <button>Infusiones</button>
                <button>Vajilla</button>
                <button>Accesorios</button>
        </nav>
    )
}

export default Navbar