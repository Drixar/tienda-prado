import './Item.css'
import Modal from '../Modal/Modal';
import { useState } from 'react';


const Item = ({ product }) => { 
  

  return (


      <div className="card">

        <div className="head">
          <div className="circle"></div>
          <div className="img">
            <img src={product.img2} alt={product.name} />
            <img className="top" src={product.img1} alt="" />
          </div>
        </div>
        <div className='cardTitle'>
          <h3>{product.name}</h3>
        </div>
        <div className={`description`}>
          <p className='textDescription'>
            {product.description}
          </p>
        <div className="contact">
          <button>Información</button>
          </div>
        </div>
      </div>
 
  );
};

export default Item;
