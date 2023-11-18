import React from "react";
import Header from "../../Layouts/Header/Header";
import HomeBanner from "./HomeBanner/HomeBanner";
import AboutCompany from "./AboutCompany/AboutCompany";
import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import OurSolution from "./OurSolution/OurSolution";
import DigitalSolution from "./DigitalSolution/DigitalSolution";
import Footer from "../../Layouts/Footer/Footer";
import GrowUp from "./GrowUp/GrowUp";
import MainLayout from "../../Layouts/MainLayout/MainLayout";

function Home() {
  return (
    <>
      <HeadingTitle pageTitle="HOME" />
      <MainLayout />
      <Header />
      <main className="home_main">
        <HomeBanner />
        <AboutCompany />
        <OurSolution />
        <DigitalSolution />
        <GrowUp />
        <Footer />
      </main>
    </>
  );
}

export default Home;
