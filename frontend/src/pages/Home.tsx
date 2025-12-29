import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { protectedService } from '../services/protectedService'

function Home() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        setLoading(true)
        const data = await protectedService.test()
        setMessage(data.message)
        setError('')
      } catch (err) {
        console.error('Failed to fetch protected data:', err)
        setError('Failed to load protected data. Please make sure you are logged in.')
      } finally {
        setLoading(false)
      }
    }

    fetchProtectedData()
  }, [])

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Home Page56</h1>
      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && (
        <div style={{ 
          padding: '20px', 
          margin: '20px 0', 
          backgroundColor: '#4CAF50', 
          color: 'white', 
          borderRadius: '5px' 
        }}>
          <strong>Backend Message:</strong> {message}
        </div>
      )}
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/Home.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Welcome to the Home page! <Link to="/about">Go to About page</Link>
      </p>
    </div>
  )
}

export default Home
