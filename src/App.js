import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './pages/login'
import SignUpForm from './pages/signup'
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
      </Routes>
  </BrowserRouter>
    )
  }
}

export default App;
