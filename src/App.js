import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Redirige la ruta raíz a la sección de regalos por defecto */}
          <Route path="/" element={<Navigate to="/category/regalos" />} />
          
          {/* Ruta para mostrar productos por categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          
          {/* Ruta para ver el carrito */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;