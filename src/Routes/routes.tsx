import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from '../Pages/ForgotPassword';
import Login from '../Pages/Login';
import ResetPassword from '../Pages/ResetPassword';
import CreateNewPassword from '../Pages/CreateNewPassword';
import NotFound from '../Pages/NotFound';
import GuestLayout from "../Layout/GuestLayout";
import Dashboard from "../Pages/Dashboard";
import MySpace from "../Pages/MySpace";
import Employee from "../Pages/Employee";
import Leaves from "../Pages/Leaves";
import Settings from "../Pages/Settingss";
import RootLayout from "../Layout/MainLayout/RootLayout";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuestLayout><Login/></GuestLayout>} />
        <Route path="/forgotpassword" element={<GuestLayout><ForgotPassword /></GuestLayout>} />
        <Route path="/resetpassword" element={<GuestLayout><ResetPassword /></GuestLayout>} />
        <Route path="/createnewpassword" element={<GuestLayout><CreateNewPassword /></GuestLayout>} />
          <Route path="/dashboard" element={<RootLayout><Dashboard /></RootLayout>} />
          <Route path="/myspace" element={<RootLayout><MySpace /></RootLayout>} />
          <Route path="/employee" element={<RootLayout><Employee /></RootLayout>} />
          <Route path="/leaves" element={<RootLayout><Leaves /></RootLayout>} />
          <Route path="/settings/:aID" element={<RootLayout><Settings /></RootLayout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

