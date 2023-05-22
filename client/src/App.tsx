import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { LandingHome } from './pages/LandingHome'

export default function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<LandingHome />} />
    </Routes>
    </>
  )
}

