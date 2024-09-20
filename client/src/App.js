import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from './pages/Home';
import Post from './pages/Post';
import { AuthProvider } from './components/AuthProvider';

const App = () => (
  <AuthProvider>
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    </Router>
  </AuthProvider>
);

export default App;