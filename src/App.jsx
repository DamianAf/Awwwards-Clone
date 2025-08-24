import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <main className='relative min-h-screen min-w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </main>
  )
}

export default App