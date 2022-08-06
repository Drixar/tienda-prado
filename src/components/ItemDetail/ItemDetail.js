import "./ItemDetail.css";

const ItemDetail = ({ name, img1, img2, description, price }) => {
  if (name) {
    console.log("cargado");
    return (
      <div className={`detailContainer`}>
        <div className="detail">
          <h1 className="itemTitle">{name}</h1>
          <div className="head">
            <div className="img">
              <img src={img2} alt={name} />
              <img className="top" src={img1} alt="" />
            </div>
          </div>
          <p className="textDescription">{description}</p>
          <h1 className="prizeText">Precio: $ {price}</h1>
        </div>
      </div>
    );
  } else {
    console.log("todavía no");
    return (
        <div className={`detailContainer`}>
          <h1>Cargando...</h1>
        </div>
      );
  }
};

export default ItemDetail;
