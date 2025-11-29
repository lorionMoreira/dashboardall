import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <div className="card">
        <p>
          This is an example About page built with React, Vite, and React Router DOM.
        </p>
        <p>
          This project demonstrates how to set up routing in a React application.
        </p>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h2>Features</h2>
        <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
          <li>⚡️ Vite for fast development</li>
          <li>⚛️ React 19</li>
          <li>🔀 React Router DOM for routing</li>
          <li>📘 TypeScript support</li>
        </ul>
      </div>
      <p className="read-the-docs">
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  )
}

export default About
