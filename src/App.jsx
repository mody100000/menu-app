import './App.css';
import MenuPage from './Pages/MenuPage';
import { ParallaxProvider } from 'react-scroll-parallax';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage';
import HomePage from './Pages/HomePage';
import ScrollToTop from './Utils/ScrollToTop';

// Create a layout component that includes ScrollToTop
const Layout = () => (
  <>
    <ScrollToTop />
    <Outlet />
    {/* Other components like <Navbar /> can go here */}
  </>
);

// Define routes
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/menu", element: <MenuPage /> },
      { path: "/about-us", element: <AboutUsPage /> },
      { path: "/contact-us", element: <ContactUsPage /> },
    ],
  },
]);

function App() {
  return (
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  );
}

export default App;