import React, { useEffect } from "react";
import ThemeMode from "../../Components/ThemeMode/ThemeMode";
import MoveTop from "../../Components/MoveTop/MoveTop";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PagePreloader from "../../Components/PagePreloader/PagePreloader";

function MainLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });

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
      <PagePreloader/>
      <Header />
      <ThemeMode />
      <MoveTop />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
