import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Silk from './components/Silk'

function App() {
  return (
    <div className="app-root">
      <div className="mx-auto max-w-7xl auto px-2 sm:px-6 lg:px-8">

        <div className="silk-bg">
          <Silk speed={4} scale={1} color="#011598ff" noiseIntensity={5} rotation={0} />
        </div>

        <div className="app-content mt-2">
          <Navbar />
          <LandingPage />
        </div>
      </div>
    </div>
  )
}

export default App
