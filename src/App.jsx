import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword';
import Home from './pages/Home';
import WishListPage from './pages/WishListPage';
import DashBoard from './pages/DashBoard';
import DashBoardProduct from './pages/DashBoardProduct'
import CheckOutPage from './pages/CheckOutPage'
import AddProductForm from './Dashboard/components/AddProductForm';



const App = () => { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wishlistpage" element={<WishListPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path='/CheckOutPage' element={<CheckOutPage/>} />
        <Route path='/DashBoard/DashBoardProduct' element={<DashBoardProduct/>} />
        <Route path='/DashBoard/AddProductForm' element={<AddProductForm/>} />

      </Routes>
    </Router>
  );
};

export default App;
