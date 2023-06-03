
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overwiew from './components/Overview';
import Footer from './components/Footer';
import Trailer from './components/Trailer';
import About from './components/About';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Overwiew />
     <Trailer />
     <About />
     <Footer />
    </div>
  );
}

export default App;
