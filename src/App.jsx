import './App.css';
import MenuPage from './Pages/MenuPage';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<MenuPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </ParallaxProvider>
    </Router>
  );
}

export default App;
