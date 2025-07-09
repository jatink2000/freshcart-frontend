import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword';
import Home from './pages/Home';
import WishListPage from './pages/WishListPage';
import CheckOutPage from './pages/CheckOutPage'
import DashBoard from './Dashboard/Pages/DashBoard';
import DashBoardProduct from './Dashboard/Pages/DashBoardProduct';
import AddProductForm from './Dashboard/components/AddProductForm';
import Editproduct from './Dashboard/components/Editproduct';



const App = () => { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wishlistpage" element={<WishListPage />} />
        <Route path='/CheckOutPage' element={<CheckOutPage/>} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard/DashBoardProduct" element={<DashBoardProduct />} />
        <Route path="/AddProductForm" element={<AddProductForm />} />
        <Route path="/Editproduct" element={<Editproduct />} />


      </Routes>
    </Router>
  );
};

export default App;
