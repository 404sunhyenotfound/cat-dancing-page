import DancingCat from './components/DancingCat'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1 className="app-title">🐱 Dancing Cat</h1>
      <p style={{ color: 'white', marginBottom: '1rem', fontSize: '1.2rem' }}>
        Watch the cat dance to the rhythm!
      </p>
      <DancingCat />
      <footer style={{
        marginTop: '3rem',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.9rem'
      }}>
        Made with ❤️ using React + Vite
      </footer>
    </div>
  )
}

export default App
