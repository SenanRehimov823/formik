import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './components/Layout';
import Form from './pages/Form';

const App = () => {
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="/contact" element={<Contact/>} />
          
        </Route>
      </Routes>
    </Router>
    <Form/>
    </div>
  )
}

export default App