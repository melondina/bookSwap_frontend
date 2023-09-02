import { Route, Routes } from "react-router";

import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import './scss/app.scss';
import React from "react";
import Footer from "./components/Footer.tsx";
import Registration from "./components/Registration.tsx";
import Login from "./components/Login.tsx";
import TermsAndConditions from "./components/TermsAndConditions.tsx";
import Logout from "./pages/Logout.tsx";
import Library from "./pages/Library.tsx";
import Profile from "./pages/Profile.tsx";
import AddNewBook from "./pages/AddNewBook.tsx";

function App() {

  return (
    <div className="wrapper">
      <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/termsAndConditions" element={<TermsAndConditions />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/library" element={<Library />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addBook" element={<AddNewBook />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
