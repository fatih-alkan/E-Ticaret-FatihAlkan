import { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import Signup from './pages/SignupPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/LoginPage';
import { useDispatch } from 'react-redux';
import { setUser, logout } from './store/reducers/clientSlice';
import axiosInstance from './api/axiosInstance';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (token) {
      axiosInstance.defaults.headers.Authorization = token;

      axiosInstance
        .get("/verify")
        .then((res) => {
          dispatch(setUser(res.data.user || res.data));

          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            axiosInstance.defaults.headers.Authorization = res.data.token;
          }
        })
        .catch(() => {
          dispatch(logout());
        });
    }
  }, [dispatch]);


  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </Router>
  );
}

export default App;
