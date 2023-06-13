import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Bkride from "./components/Bkride/Bkride";
import FAQ from "./components/FAQ/FAQ";
import Aboutus from "./components/Aboutus/Aboutus";
import Booking from "./components/Booking/Booking";
import Contacts from "./components/Contacts/Contacts";
import LocationRoute from "./components/LocationRoute/LocationRoute";


export const Router = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Bkride />} />
        <Route path="/FAQs" element={<FAQ />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/route" element={<LocationRoute/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Router;
