
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import HrPage from './pages/HrPage/HrPages'
function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hr" element={<HrPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
