import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Docs from './components/Docs';
import Installation from './components/Installation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Docs />
        <Installation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
