import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Video from './pages/Video/Video'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:videoId' element={<Video />} />
        <Route path='/login' element={<Login />} />
      </Routes>


      <ToastContainer />
    </>
  )
}

export default App