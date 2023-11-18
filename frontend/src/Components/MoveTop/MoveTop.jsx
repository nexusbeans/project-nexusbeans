import React, { useEffect, useState } from 'react'

const MoveTop = () => {
    const [pathLength, setPathLength] = useState(0);

    useEffect(() => {
      const scrollPath = document.querySelector('.scroll-up path');
      const pathLengthValue = scrollPath.getTotalLength();
  
      scrollPath.style.transition = scrollPath.style.WebkitTransition = 'none';
      scrollPath.style.strokeDasharray = `${pathLengthValue} ${pathLengthValue}`;
      scrollPath.style.strokeDashoffset = pathLengthValue;
      scrollPath.getBoundingClientRect();
      scrollPath.style.transition = scrollPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  
      setPathLength(pathLengthValue);
  
      const updateScroll = () => {
        const scroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const offset = pathLengthValue - (scroll * pathLengthValue / height);
        scrollPath.style.strokeDashoffset = offset;
      };
  
      updateScroll();
  
      window.addEventListener('scroll', updateScroll);
  
      return () => {
        window.removeEventListener('scroll', updateScroll);
      };
    }, [pathLength]);
  
    const handleScrollToTop = () => {
      const offset = 50;
      const duration = 950;
  
      if (window.scrollY > offset) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };
  return (
    <>
    {/* Scroll Btn Start */}
    <div className="scroll-up" onClick={handleScrollToTop}>
      <svg
        className="scroll-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />{" "}
      </svg>
    </div>
    {/* Scroll Btn End */}
  </>
  )
}

export default MoveTop