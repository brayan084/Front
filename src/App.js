import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Singup from './Singup';
import Usuarios from './Usuarios';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Singup />} />
        <Route path='/usuarios' element={<ProtectedRoute > <Usuarios/> </ProtectedRoute>} />
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const ProtectedRoute = ({ redirectPath = "/login", children}) => {
  const token = localStorage.getItem("token_test");

  if (!token) {
    return <Navigate to={redirectPath} />;
  }
  return children
  
}

export default App;
