import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Projects from './Components/Projects';
import { Outlet, useLocation } from 'react-router-dom';
import ContactMe from './Components/ContactMe';

function App() {
  const location = useLocation();

  // Check if the current path is a project detail path
  const isProjectDetail = location.pathname.startsWith("/Project");

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-gray-800 overflow-hidden"> {/* Added overflow-hidden */}
      <Navbar />
      <div className="flex flex-col min-h-screen"> {/* Ensure the container takes full height */}
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
