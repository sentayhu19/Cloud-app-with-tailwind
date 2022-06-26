import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Support from './components/Support';
import Allinone from './components/Allinone';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 150 });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Allinone />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
