import About from './components/About.jsx';
import Hero from './components/Hero.jsx';

const App = () => {
  return (
    <main className='relative min-h-screen min-w-screen overflow-x-hidden'>
      <Hero />
      <About />
    </main>
  )
}

export default App