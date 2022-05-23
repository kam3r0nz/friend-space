import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard'
import Preferences from './components/preferences'

export default function App() {
  return (
      <div className="App">
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