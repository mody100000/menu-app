import './App.css';
import MenuPage from './Pages/MenuPage';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUsPage from './Pages/AboutUsPage';

function App() {
  return (
    <Router>
      <ParallaxProvider>
        {/* <Navbar />  */}
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<MenuPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </ParallaxProvider>
    </Router>
  );
}

export default App;
