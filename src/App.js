import React from "react";
import ReactDOM from "react-dom";
// import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import Hero from "../src/components/Hero/Hero";
import Hero2 from "./components/Hero2/Hero2";
import Bkride from "./components/Bkride/Bkride";
import Footer from "./components/footer/Footer";
import { Router } from "./Router";

const App = () => {
  return (
    <div className="App">
      {/* <Home />
      <Hero />
      <Hero2 />
      <Bkride />
      <Footer /> */}
      <Router />
    </div>
  );
};

export default App;
