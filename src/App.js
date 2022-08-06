import './App.css';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Topbar />
        <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer texto='Listado de Productos'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer texto='Listado filtrado'/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
            <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
