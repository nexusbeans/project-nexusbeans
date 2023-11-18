import React, { useEffect } from 'react'
import ThemeMode from '../../Components/ThemeMode/ThemeMode'
import MoveTop from '../../Components/MoveTop/MoveTop'

function MainLayout() {
    useEffect(() => {
        const themeLoader = document.querySelector('.theme-loader');
        
        if (themeLoader) {
          // Use a timeout to simulate the fade-out effect
          setTimeout(() => {
            themeLoader.style.display = 'none';
          }, 500);
        }
      }, []); // Empty dependency array ensures this effect runs only once on mount
    
  return (
    <>
    <>
  {/* Preloader Start */}
  <div className="theme-loader">
    <div className="spinner">
      <div className="spinner-bounce one" />
      <div className="spinner-bounce two" />
      <div className="spinner-bounce three" />
    </div>
  </div>
  {/* Preloader End */}
</>

    <ThemeMode/>
    <MoveTop/>
    </>
  )
}

export default MainLayout