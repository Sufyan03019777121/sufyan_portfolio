import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/layout/Header';
import "../src/styles/main.css"
import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Projects';
import Footer from './components/layout/Footer';



function App() {
  return (
    <div >
      <Navbar />
      <Header />
      <About />
      <Contact />
      <Project />
      <Footer/>
    </div>
  );
}

export default App;
