import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/NavBar';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/About' element={<About />} />
        <Route path='/Collares' element={<Body />} />
        <Route path='/Arneses' element={<Body />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
