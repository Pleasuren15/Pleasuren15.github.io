import { useEffect, useRef, useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Silk from './components/Silk'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

const NAVBAR_HEIGHT = "4rem";

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center w-full sm:px-8 lg:px-30"
      style={{
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT})`,
        scrollSnapAlign: "start",
        scrollMarginTop: NAVBAR_HEIGHT,
      }}
    >
      <div
        className="w-full transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(48px)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <div
      className="app-root"
      style={{ "--navbar-height": NAVBAR_HEIGHT } as React.CSSProperties}
    >
      <div className="silk-bg">
        <Silk speed={4} scale={1} color="#011598ff" noiseIntensity={5} rotation={0} />
      </div>

      <div
        className="app-content"
        style={{
          scrollSnapType: "y mandatory",
          overflowY: "scroll",
          height: "100vh",
          scrollBehavior: "smooth",
        }}
      >
        {/* Navbar + Landing snap together as one full viewport */}
        <div
          style={{
            scrollSnapAlign: "start",
            height: "100vh",
          }}
          className="sm:px-8 lg:px-30"
        >
          <Navbar />
          <LandingPage />
        </div>

        <Section>
          <AboutMe />
        </Section>

        <Section>
          <Skills />
        </Section>

        <Footer />
      </div>
    </div>
  );
}

export default App
