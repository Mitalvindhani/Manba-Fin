import React, { useState, useEffect } from "react";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./landing";
import About from './aboutuspage/aboutus';
import Service from './servicespage/services';
import ContactUs from './contactpages/contact';
import GoldLoans from './LoansPages/goldloan';
import PersonalLoans from './LoansPages/personalloan';
import BusinessLoan from './LoansPages/businessloan';
import HomeLoans from './LoansPages/homeloan';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>          
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/service" element={<Service/>}/>
          <Route exact path="/contact" element={<ContactUs/>} />
          <Route exact path="/goldloan" element={<GoldLoans/>}/>
          <Route exact path="/personalLoan" element={<PersonalLoans/>}/>
          <Route exact path="/businessloan" element={<BusinessLoan/>}/>
          <Route exact path="/homeloan" element={<HomeLoans/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
