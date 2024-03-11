import './App.css';
import CreateNewPassword from './Pages/CreateNewPassword';
import ForgotPassword from './Pages/ForgotPassword';
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';
import AppRoutes from './Routes/routes';

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8App h-screen">
      <AppRoutes />
    </div>
  );
}

export default App;
