import React from 'react'
import { BrowserRouter as Router , Routes,Route } from "react-router-dom"
import ForgotPassword from '../Pages/ForgotPassword'
import Login from '../Pages/Login'
import ResetPassword from '../Pages/ResetPassword'
import CreateNewPassword from '../Pages/CreateNewPassword'
import NotFound from '../Pages/NotFound'

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/createnewpassword" element={<CreateNewPassword />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default AppRoutes
