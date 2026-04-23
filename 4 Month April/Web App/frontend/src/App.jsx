import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './screens/Login';
import Register from './screens/Register';
import Items from './screens/Items'
import Dashboard from './screens/Dashboard';
import AuthNavBar from "./components/AuthNavBar"
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  console.log(import.meta.env.VITE_API_URL_BACKEND, "==>")

  return (
    <BrowserRouter>
      <div>


        <ToastContainer position="top-right"  //ToastContainer resend notification popups on screen      
          autoClose={5000}                    // tostify through alert msg show 
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />

        <AuthNavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/items" element={<Items />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* <Route path="/items" element={ <ProtectedRoutes> <Items/> </ProtectedRoutes> } />
          <Route path="/dashboard" element={ <ProtectedRoutes> <Dashboard/> </ProtectedRoutes> } /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
