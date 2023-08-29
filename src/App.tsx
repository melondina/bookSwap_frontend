import { Route, Routes } from "react-router";

import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import './scss/app.scss';
import React from "react";
import Footer from "./components/Footer.tsx";

function App() {

  return (
    <div className="wrapper">
      <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
