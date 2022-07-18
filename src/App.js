import './App.css';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <ItemListContainer texto='Listado de Productos'/>
    </div>
  );
}

export default App;
