import React, { useEffect } from 'react'
import ThemeMode from '../../Components/ThemeMode/ThemeMode'
import MoveTop from '../../Components/MoveTop/MoveTop'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function MainLayout() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of animations
      easing: 'ease-in-out', // Choose the easing function
      once: false, // Set to true if you want the animation to occur only once
    });
  }, []);
    useEffect(() => {
        const themeLoader = document.querySelector('.theme-loader');
        
        if (themeLoader) {
          // Use a timeout to simulate the fade-out effect
          setTimeout(() => {
            themeLoader.style.display = 'none';
          }, 500);
        }
      }, []); // Empty dependency array ensures this effect runs only once on mount

      useEffect(() => {
        const elements = document.querySelectorAll("[data-background]");
        elements.forEach((element) => {
          const backgroundImage = element.getAttribute("data-background");
          if (backgroundImage) {
            element.style.backgroundImage = `url(${backgroundImage})`;
          }
        });
      }, []); 
    
    
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