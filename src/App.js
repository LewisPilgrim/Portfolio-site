import { useState } from 'react'
import "./App.css";
import LandingPage from "./components/LandingPage";
import MainPage from './components/mainPage/MainPage';

function App() {
  const [landingPage, setLandingPage] = useState(true);

  const enterSite = () => setLandingPage(false)

  return (
    <div className='App'>
      {landingPage ? <LandingPage enterSite={enterSite} /> : <MainPage />}
    </div>
  );
}

export default App;
