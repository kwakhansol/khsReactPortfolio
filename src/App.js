
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import ProjectList from './components/projectList/projectList';
import Contact from './components/contact/Contact';
import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';

function App() {
  const scrollRef=useRef(null);
  useScrollSnap({
    ref:scrollRef, duration:100, delay:50
  });

  return (
    <div className="App">
      <div className="sections" ref={scrollRef}>
        <Intro/>
        <About />
        <Skills/>
        <ProjectList />
        <Contact />
      </div>
    </div>
  );
}

export default App;
