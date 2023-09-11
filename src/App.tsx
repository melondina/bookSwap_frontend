import React, {lazy, useEffect} from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from 'react-redux';
import { getUser } from './components/UserAuth/userAuthOperation/userAuthOperation.ts';
import { setUser } from "./redux/slices/usersSlice.js";
import './scss/app.scss';

const Header = lazy(() => import("./components/Header.tsx"));
const Footer = lazy(() => import("./components/Footer.tsx"));
const Home = lazy(() => import("./pages/Home.tsx"));
const TermsAndConditions = lazy(() => import("./components/TermsAndConditions.tsx"));

const Logout = lazy(() => import( "./pages/Logout.tsx"))
const Library = lazy(() => import( "./pages/Library.tsx"))
const Profile = lazy(() => import( "./pages/Profile.tsx"))

const Filter = lazy(() => import( "./components/Filter.tsx"))
const Search = lazy(() => import( "./components/Search.tsx"))

const AddNewBook = lazy(() => import( "./pages/AddNewBook.tsx"));
const UpdateBook = lazy(() => import( "./pages/UpdateBook.tsx"))

const BookInfo = lazy(() => import( "./pages/BookInfo.tsx"))
const Registration = lazy(() => import( "./components/UserAuth/Registration.tsx"))
const Login = lazy(() => import( "./components/UserAuth/Login.tsx"))




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

            <Route path="/profile" element={<Profile />} />n
            <Route path="/filter" element={<Filter />} />
            <Route path="/searchBook" element={<Search />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/addBook" element={<AddNewBook />} />
            <Route path="/updateBook/:id" element={<UpdateBook />} />


            <Route path="/bookInfo/:id" element={<BookInfo bookId={0} title={""} author={""} description={""} category={""} language={""} pages={0} publisherDate={0} cover={""} location={""} queueSize={0} />} />

          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;

