import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Silk from './components/Silk'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-root min-h-screen flex flex-col">
      <div className="silk-bg">
        <Silk speed={4} scale={1} color="#011598ff" noiseIntensity={5} rotation={0} />
      </div>

      <div className="flex-grow py-2 sm:px-8 lg:px-30">
        <div className="app-content mt-2">
          <Navbar />
          <LandingPage />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
