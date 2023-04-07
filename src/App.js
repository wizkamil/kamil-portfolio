import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route,} from 'react-router-dom'


import Portfolio from './components/screen/Portfolio';
import Header from './components/Includes/Header';
import Spotlight from './components/Includes/Spotlight';
import About from './components/screen/About'
import Contact from './components/screen/Contact';
import Project from "./components/screen/Project"


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path="kamil-portfolio/" element={<Portfolio/>} />
            <Route exact path="kamil-portfolio/About/" element={<About />} />
            <Route exact path="kamil-portfolio/Contact/" element={<Contact />} />
            <Route exact path="kamil-portfolio/Project/" element={<Project/>} />
          </Routes>
        </BrowserRouter>
    </>
    
  );
}

export default App;
