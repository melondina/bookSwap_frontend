import { Route, Routes } from "react-router";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './components/UserAuth/userAuthOperation/userAuthOperation.ts';
import { setUser } from "./redux/slices/usersSlice.js";



import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import './scss/app.scss';
import React from "react";
import Footer from "./components/Footer.tsx";
import TermsAndConditions from "./components/TermsAndConditions.tsx";
import Logout from "./pages/Logout.tsx";
import Library from "./pages/Library.tsx";
import Profile from "./pages/Profile.tsx";
<<<<<<< HEAD
import Filter from "./components/Filter.tsx";
import Search from "./components/Search.tsx";
=======
import AddNewBook from "./pages/AddNewBook.tsx";
import BookInfo from "./pages/BookInfo.tsx";
import Registration from "./components/UserAuth/Registration.tsx";
import Login from "./components/UserAuth/Login.tsx";

>>>>>>> 8977cae69c94aac8b4d8bebd22b9174db0a2992f


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
        try {
          const getMe = await getUser();
          console.log("getMe", getMe?.data);
    
          if (getMe?.status === 200) {
            dispatch(setUser(getMe.data));
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } 
      fetchData()   

   }, [dispatch]);

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
<<<<<<< HEAD
            <Route path="/profile" element={<Profile />} />n
            <Route path="/filter" element={<Filter />} />
            <Route path="/searchBook" element={<Search />} />
=======
            <Route path="/profile" element={<Profile />} />
            <Route path="/addBook" element={<AddNewBook />} />
<<<<<<< HEAD
            <Route path="/bookInfo/:id" element={<BookInfo bookId={0} title={""} author={""} description={""} category={""} language={""} pages={0} publisherDate={0} cover={""} location={""} queueSize={0} />} />
=======
            <Route path="/bookInfo/:id" element={<BookInfo />} />
>>>>>>> 8977cae69c94aac8b4d8bebd22b9174db0a2992f
>>>>>>> c523cecf7a31d0e9b2e71d8c98818d06a5caaced
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;

