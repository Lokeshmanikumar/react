import './App.css';
import Products from "./Components/Products"
import Navbar from "./Components/Navbar"
import Cart from "./Components/Cart"
import {Routes,Route} from "react-router-dom"

const App = () =>  {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Products/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
