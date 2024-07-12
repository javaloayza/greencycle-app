import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { LandingHome } from './pages/LandingHome'
import { Login } from './pages/Login'

export default function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<LandingHome />} />
        <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

