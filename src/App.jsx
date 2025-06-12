import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import HomePage from './pages/HomePage'
import RecentPage from './pages/RecentPage'
import { Routes, Route } from 'react-router-dom';
import MembershipPage from './pages/MembershipPage'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<> <HomePage /> <Footer/> </>} />
        <Route path="/recentpost" element={<RecentPage />} />
        <Route path="/membership" element={<MembershipPage />} />
    </Routes>
    
    </>
  )
}

export default App
