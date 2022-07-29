import './Modal.css'
import React from 'react'
import Counter from '../Counter/Counter'
import { getProducts } from '../../asyncMock'

const Modal = ({isOpen, closeModal, stock}) => {
  return (
    <div className={`modal ${isOpen && 'modal-open'}`}>

        <div>
            <Counter stock = {stock}/>
        </div>
        <div className="comprar">
          <button onClick={closeModal}>+Info</button>
    
        </div>


    </div>
  )
}

export default Modal