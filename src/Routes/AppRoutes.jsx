import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Screens/Login/Login';
import Register from '../Screens/Register/Register';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes