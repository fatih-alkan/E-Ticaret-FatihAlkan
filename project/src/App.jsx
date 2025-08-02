import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
