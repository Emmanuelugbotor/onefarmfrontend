import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import LoginPage from './pages/loginPage/LoginPage';
import NotFound from './pages/notFound/NotFound';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import Faq from './pages/FAQ/Faq';
import SIgnUpPage from './pages/SignUpPage/SIgnUpPage';
import ContactUsPage from './pages/contactUsPage/ContactUsPage';
import Shop from './pages/Shop/Shop';
import Farmers from './pages/farmers/Farmers';
import CartPage from './pages/CartPage/CartPage';
import FarmerDashboard from './pages/farmerDashboard/FarmerDashboard';
import Payment from './pages/payment/Payment';
import Login from './pages/Login/Login';
import SignUp from './pages/signUp/SignUp';

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signUpPage" element={<SIgnUpPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<Payment/>} />
        {/* FARMERS SECTION */}
        <Route path="/farmer_signUpPage" element={<SignUp/>} />
        <Route path="/farmer_LoginPage" element={<Login/>} />
        <Route path="/dashboard/*" element={<FarmerDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
