import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Index from './components/Index';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
   
      </div>
    </Router>
  );
}

export default App;
