import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard'
import Login from './components/Login/Login'
import Preferences from './components/Preferences'

export default function App() {
  const [token, setToken] = useState()

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
      <div className="wrapper">
        <h1>Friend Space</h1>
        <Router>
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/preferences" element={<Preferences />} />
          </Routes>
        </Router>
      </div>
  )
}