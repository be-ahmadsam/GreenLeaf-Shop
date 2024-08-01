import {Routes, Route} from "react-router-dom"

import './App.css';
import Home from './pages/Home';
import ShoppingBags from "./pages/ShoppingBags";
import Community from "./pages/Community";
import Toothbrush from "./pages/Toothbrush";
import TShirts from "./pages/TShirts";


function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route
      element={<Home/>}
      path="/"/>
      <Route
      element={<ShoppingBags/>}
      path="/shoppingbags"/>
     
      <Route
      element={<Community/>}
      path="/community"/>
      <Route
      element={<Toothbrush/>}
      path="/toothbrush"/>
      <Route
      element={<TShirts/>}
      path="/tshirts"/>
      </Routes>
      
    </div>
  );
}

export default App;