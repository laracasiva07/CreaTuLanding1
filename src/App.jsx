import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Header from './Components/Header';
import "./App.css";
import Home from './pages/Home';
import ProductDetail from './Components/ItemListContainer/Product';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
