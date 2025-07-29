
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import HrPage from './pages/HrPage/HrPages'
import RegisterForm from './pages/authorization/register/register'
import Login from './pages/authorization/login/login'
import PasswordReset from './pages/authorization/PasswordResetPage/PasswordReset'
function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hr" element={<HrPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
