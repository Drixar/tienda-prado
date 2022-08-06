import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, name, img1, img2 }) => {
  

  return (


      <div className="card">

        <div className="head">
          <div className="circle"></div>
          <div className="img">
            <img src={img2} alt={name} />
            <img className="top" src={img1} alt="" />
          </div>
        </div>
        <div className='cardTitle'>
          <h3>{name}</h3>
        </div>

        <div className="footer">
        <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
          </div>
        </div>
    
 
  );
};

export default Item;
