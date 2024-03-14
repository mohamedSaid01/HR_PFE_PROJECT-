import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import ForgotPassword from '../Pages/ForgotPassword'
import Login from '../Pages/Login'
import ResetPassword from '../Pages/ResetPassword'
import CreateNewPassword from '../Pages/CreateNewPassword'
import NotFound from '../Pages/NotFound'
import GuestLayout from "../Layout/GuestLayout"

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<GuestLayout><Login/></GuestLayout>} />
            <Route path="/forgotpassword" element={<GuestLayout><ForgotPassword /></GuestLayout>} />
            <Route path="/resetpassword" element={<GuestLayout><ResetPassword /></GuestLayout>} />
            <Route path="/createnewpassword" element={<GuestLayout><CreateNewPassword /></GuestLayout>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default AppRoutes
