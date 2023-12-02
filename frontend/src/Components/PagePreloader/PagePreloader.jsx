import React, { useEffect } from "react";

const PagePreloader = () => {
  useEffect(() => {
    const themeLoader = document.querySelector(".theme-loader");
    if (themeLoader) {
      setTimeout(() => {
        themeLoader.style.display = "none";
      }, 500);
    }
    const preloader = document.getElementById("preloader");
    preloader.classList.add("off");
  }, []);

  return (
    <>
      <div id="preloader" className="preloader">
        <div className="black_wall"></div>
        <div className="loader"></div>
      </div>
    </>
  );
};

export default PagePreloader;
