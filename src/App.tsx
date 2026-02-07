import './App.css'
import Silk from './components/Silk'

function App() {
  return (
    <div className="app-root">
      <div className="silk-bg">
        <Silk speed={4} scale={1} color="#011598ff" noiseIntensity={5} rotation={0} />
      </div>

      <div className="app-content">
        {/* Page content goes here; it will sit above the Silk background */}
      </div>
    </div>
  )
}

export default App
