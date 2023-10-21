import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Show from "./Pages/Show";
import Form from "./Pages/Form";
import Header from "./components/Header";
import NavBar from './components/NavBar';
import Transactions from "./components/Transactions";
import TransactionsForm from "./components/TransactionsForm";
import './App.css'
 

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-transaction-form" element={<Form />} />
          
        </Routes>
      </Router>
    </div>
    
    
  )
}

export default App
