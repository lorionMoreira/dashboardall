import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './context/AuthContext'
import './App.css'

function App() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <div className="App">
      {isAuthenticated && (
        <nav style={{ 
          padding: '1rem', 
          borderBottom: '1px solid #646cff',
          marginBottom: '2rem',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
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
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ color: '#888' }}>Welcome, {user?.username}</span>
            <button 
              onClick={logout}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                border: '1px solid #646cff',
                backgroundColor: 'transparent',
                color: '#646cff',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Logout
            </button>
          </div>
        </nav>
      )}

      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/" replace /> : <Login />
        } />
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/about" element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        } />
        <Route path="*" element={
          <div>
            <h1>404 - Page Not Found</h1>
            <p><Link to={isAuthenticated ? "/" : "/login"}>
              Go back to {isAuthenticated ? "Home" : "Login"}
            </Link></p>
          </div>
        } />
      </Routes>
    </div>
  )
}

export default App
