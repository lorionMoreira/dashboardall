import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <div className="App">
      <nav style={{ 
        padding: '1rem', 
        borderBottom: '1px solid #646cff',
        marginBottom: '2rem',
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center'
      }}>
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: '#646cff',
          fontWeight: 'bold'
        }}>
          Home
        </Link>
        <Link to="/about" style={{ 
          textDecoration: 'none', 
          color: '#646cff',
          fontWeight: 'bold'
        }}>
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={
          <div>
            <h1>404 - Page Not Found</h1>
            <p><Link to="/">Go back to Home</Link></p>
          </div>
        } />
      </Routes>
    </div>
  )
}

export default App
