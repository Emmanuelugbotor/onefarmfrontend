import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import LoginPage from "./pages/loginPage/LoginPage";
import NotFound from "./pages/notFound/NotFound";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import Faq from "./pages/FAQ/Faq";
import SIgnUpPage from "./pages/SignUpPage/SIgnUpPage";
import ContactUsPage from "./pages/contactUsPage/ContactUsPage";
import Shop from "./pages/Shop/Shop";
import Farmers from "./pages/farmers/Farmers";
import CartPage from "./pages/CartPage/CartPage";
import FarmerDashboard from "./pages/farmerDashboard/FarmerDashboard";
import Payment from "./pages/payment/Payment";
import Login from "./pages/Login/Login";
import SignUp from "./pages/signUp/SignUp";

import SuperLoginPage from "./pages/superAdminRoutes/adminLogin/login";
import SuperRegisterPage from "./pages/superAdminRoutes/adminRegister/adminRegister";
import AdminDashboard from "./pages/superAdminRoutes/adminDashboard/adminDashboard";
import Address from './pages/Address/Address'
import { Provider, useSelector } from "react-redux";
import store from "../src/redux/store";
// vendor section........
import VendorSignUp from "./pages/vendors/vendor_signup"
import VendorLogin from "./pages/vendors/Login"
import VendorDashboard from "./pages/vendors/VendorDashboard";
import ContactUsMain from './pages/contactUsPageMain/contactUsMain'
// import CheckoutPage from "../src/"
function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/signUpPage" element={<SIgnUpPage />} />
          <Route path="/contact-us" element={< ContactUsMain  />} />
          {/* <Route path="/contact-us" element={< ContactUsPage  />} /> */}
          <Route path="/faq" element={<Faq />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/address" element={<Address />} />

          {/* FARMERS SECTION */}
          
          <Route path="/farmer_signUpPage" element={<SignUp />} />
          <Route path="/farmer_LoginPage" element={<Login />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <FarmerDashboard />
              </PrivateRoute>
            }
          />

          {/*  VENDORS SECTIONS  */}
          <Route
            path="/vendor/*"
            element={
              <VendorPrivateRoute>
                <VendorDashboard />
              </VendorPrivateRoute>
            }
          />

            <Route path="/buyers_SignUpPage" element={<VendorSignUp />} />
            <Route path="/buyers_LoginPage" element={<VendorLogin />} />

          {/* Super Admin Section.. */}

          <Route path="/admin_login" element={<SuperLoginPage />} />
          <Route path="/admin_register" element={<SuperRegisterPage />} />
          <Route path="/admin_dashboard/*" element={<AdminDashboard />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </React.Fragment>
  );
}

const PrivateRoute = ({ children }) => {
  // const userSignin = useSelector((state) => state.userSignIn);
  // const { userInfo } = userSignin;
  // if (userInfo && userInfo.token) return children;
  // return <Navigate to="/farmer_LoginPage" />;
  return children;
};

const VendorPrivateRoute = ({ children }) => {
  // console.log("this is the length of the children ", children.length)
  
  const vendorSignIn = useSelector((state) => state.vendorSignIn);
  const { vendorInfo, loading, error, success } = vendorSignIn;
  if (vendorInfo && vendorInfo.token && vendorInfo.role === "vendor") return children;
  return <Navigate to="/buyers_LoginPage" />;
  // return children;  
};


export default App;
