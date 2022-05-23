import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/dashboard'
import Preferences from './components/preferences'

export default function App() {
  return (
      <div className="App">
        <h1>Friend Space</h1>
        <Router>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/preferences" component={Preferences} />
        </Router>
      </div>
  )
}