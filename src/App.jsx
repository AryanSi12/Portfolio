import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Projects from './Components/Projects';
import { Outlet, useLocation } from 'react-router-dom';
import ContactMe from './Components/ContactMe';
import './App.css'
function App() {
  const location = useLocation();

  // Check if the current path is a project detail path
  const isProjectDetail = location.pathname.startsWith("/Project");

  return (
    <div className="min-h-screen  overflow-hidden"> 
      <Navbar />
      <div className="container mx-auto px-5 flex flex-col min-h-screen"> 
        {/* Added container and mx-auto for centering content */}
        {!isProjectDetail && (
          <>
            <Hero />
            <About />
            <Projects />
            <Technologies />
            <ContactMe />
          </>
        )}
        <Outlet /> 
      </div>
    </div>
  );
}

export default App;
