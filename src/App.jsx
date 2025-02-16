import About from './components/about.jsx';
import Hero from './components/hero.jsx';
import NavBar from './components/navbar.jsx';
import Features from './components/features.jsx';
import Story from './components/story.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
function App(){
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>
  );
}
export default App;