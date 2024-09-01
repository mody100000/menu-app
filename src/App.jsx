import './App.css'
import MenuPage from './Pages/MenuPage'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {

  return (
    <>
      <div >
        <ParallaxProvider>
          <MenuPage />
        </ParallaxProvider>
      </div>
    </>
  )
}

export default App
