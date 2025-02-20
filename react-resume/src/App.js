//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import ProfessionalJourney from './components/ProfessionalJourney.js';
import ProjectsShowcase from './components/ProjectsShowcase';
import Contact from './components/Contact';

function App() {
  return (

    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ProfessionalJourney" element={<ProfessionalJourney />} />
        <Route path="/projects" element={<ProjectsShowcase />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
