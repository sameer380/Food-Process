
import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Footer';
import ResponsiveAppBar from './ResponsiveAppBar';
import Home from "./Home";
import Favorites from "./Favorites";
import About from './About';
import  Gall  from './Gall';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePathChange);

    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  const renderComponentForPath = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/favorites':
        return <Favorites />;
        case '/about':
        return <About />;
      default:
        return <Home />; 
    }
  };

  return (
    <>
      <div className="app-div">
        <ResponsiveAppBar />
        {renderComponentForPath()}
        <Footer />
      </div>
    </>
  );
}

export default App;
