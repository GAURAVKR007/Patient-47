
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overwiew from './components/Overview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Overwiew />
     <Footer />
    </div>
  );
}

export default App;
