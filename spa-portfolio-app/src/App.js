import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>    
      <div className="About">
        <About />
    </div>
    <div className='Contact'>
      <Contact />
    </div>
    </div>

  );
}

export default App;
