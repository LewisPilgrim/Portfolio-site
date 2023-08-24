<<<<<<< HEAD
import { useState } from 'react'
=======
import React, { useState } from 'react'
>>>>>>> 682b09842ff6531a0233276f472d7cc121b0fbc4
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
