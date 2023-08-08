import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/work'
import Login from './pages/Login';
import Signup from './pages/SignUp'; // Import the SignIn component
import '../src/styles/navbar.css';
import '../src/styles/login.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="login" element={<Login />} />
          <Route path="work" element={<Work/>} />
          <Route path="signup" element={<Signup />} /> {/* Add the Signin route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
