import './App.css';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './components/CartContext/CartContext';
// import { UserContextProvider } from './components/UserContext/UserContext'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
      {/* <UserContextProvider> */}
      <CartContextProvider>
        <Topbar />
        <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer texto='Listado de Productos'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer texto='Listado filtrado'/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
            <Route path='/cart' element={<Cart/>} /> 
            <Route path='/checkout' element={<Checkout/>} /> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
          </Routes>
          </CartContextProvider>
          {/* </UserContextProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
