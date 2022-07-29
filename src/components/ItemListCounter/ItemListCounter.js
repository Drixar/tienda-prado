import './ItemListCounter.css'
import Counter from '../Counter/Counter'




const ItemListCounter = ({ texto }) => {
    const agregando = (cantidad) => {
        console.log(`La cantidad agregada es ${cantidad}`)
    }

    return (
        <>
        <h1 className='listTitle'>{texto}</h1>
        <div className='listContainer'>
            <Counter stock={20} agregar={agregando}/>
        </div>
        </>
    )
}

export default ItemListCounter