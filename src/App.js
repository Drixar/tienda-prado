import './App.css';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListCounter from './components/ItemListCounter/ItemListCounter';


function App() {

  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <ItemListCounter texto='Listado de Productos'/>
    </div>
  );
}

export default App;
