import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import NewsLetter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Cards/>
      <Footer/>
      <NewsLetter/>
    </div>
  );
}

export default App;
