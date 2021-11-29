import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Contact from './components/Home/Contact/Contact';
import AboutMe from './components/Home/AboutMe/AboutMe';
import Portfolio from './components/Home/Portfolio/Portfolio';
import Skill from './components/Home/Skill/Skill';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
