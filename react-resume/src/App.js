import { Routes, Route } from 'react-router-dom'; // ✅ Just import Routes & Route
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import ProfessionalJourney from './components/ProfessionalJourney.js';
import ProjectsShowcase from './components/ProjectsShowcase';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/professionaljourney" element={<ProfessionalJourney />} />
        <Route path="/projects" element={<ProjectsShowcase />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
