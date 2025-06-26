import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  
  return (
    <>
    <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
