import './App.css';
import MenuPage from './Pages/MenuPage';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <ParallaxProvider>
        {/* <Navbar />  */}
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </ParallaxProvider>
    </Router>
  );
}

export default App;
