import './Item.css'
import { Link } from 'react-router-dom'
import { Getimg } from '../Files/Files';


const Item = ({id, name, img }) => {
  

  return (


      <div className="card">

        <div className="head">
          <div className="circle"></div>
          <div className="img">
            <img src={Getimg(img[1])} alt={name} />
              <img className="top" src={Getimg(img[0])} alt="" />
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
