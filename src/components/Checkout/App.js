import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/checkout/Checkout';
import OrderConfirmation from './components/OrderConfirmation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation/:id" element={<OrderConfirmation />} />
        {/* Otras rutas... */}
      </Routes>
    </Router>
  );
};

export default App;
