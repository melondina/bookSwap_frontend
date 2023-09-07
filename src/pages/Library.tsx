<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
<<<<<<< HEAD
import React from 'react';
import MyLibraryBox from '../components/MyLibraryBox.tsx';

const Library: React.FC = () => {
    return (
        <div>
            <MyLibraryBox />
        </div>
    )}
=======
import React, { useEffect } from 'react';
>>>>>>> c523cecf7a31d0e9b2e71d8c98818d06a5caaced
import { useSelector } from "react-redux";

import { Link, useNavigate } from 'react-router-dom';
import MyLibraryBox from '../components/MyLibraryBox.tsx';
import axios from 'axios';
// import Cards from '../components/Cards/index.tsx';

interface IBooks {
    bookId: number,
    title:string,
    cover: string,
    author:string,
    category:string,
    language:string
}

interface IItems {
    items: IBooks[];
}

interface IBooksObject {
    cards: IItems,
}

const Library: React.FC = () => {
    
    const items = useSelector((state:IBooksObject) => state.cards.items);
    console.log("items", items);

    const user = useSelector((state) => state.user.user)
    // console.log("user", user);

    const [userBooks, setUserBooks] = useState({});
    const [userWaitingBooks, setUserWaitingBooks] = useState({});


    const navigate = useNavigate();

    const getBookById = (bookId: number) => {
        navigate(`/bookInfo/${bookId}`)
        console.log(bookId)
    }

    const getUsersBooks = async () => {
        try {
            const response = await axios.get(`/api/books/?userId=${user?.id}`, { withCredentials: true });
            console.log("getUsersBooks", response?.data);
            setUserBooks(response?.data);
        } catch (error) {
            console.log("getUsersBooks", error);
        }
    }

    const getUsersWaitingBooks = async () => {
        try {
            const response = await axios.get(`/api/books/waiting/${user?.id}`, { withCredentials: true });
            console.log("getUsersWaitingBooks", response?.data);
            setUserWaitingBooks(response?.data);
        } catch (error) {
            console.log("getUsersWaitingBooks", error);
        }
    }

    console.log("userBooks", userBooks?.count);
    // const count = userBooks.count;
    // console.log("count", count)


    const handleMyBooks = async () => {
        try {
            await getUsersBooks();
        } catch (error) {
            console.log("getUsersBooks", error);
        }
    }

    const handleMyWaitingBooks = async () => {
        try {
            await getUsersWaitingBooks();
        } catch (error) {
            console.log("getUsersWaitingBooks", error);
        }
    }
    
      useEffect(() => {
        async function fetchData() {
            try {
                await getUsersBooks();
            } catch (error) {
                console.log("getUsersBooks", error);
            }
        };

        async function fetchData1() {
            try {
                await getUsersWaitingBooks();
            } catch (error) {
                console.log("getUsersWaitingBooks", error);
            }
        };

      
        fetchData();
        fetchData1();
      
      }, []);


    return (
        <div className='container'>
            <h2 className="content__title">My Library</h2>
            <div className='content__items'>
                <div>
                    <div>
                        <button type='button' onClick={handleMyBooks}>My books</button>
                        <span>{userBooks?.count}</span>

                        <button type='button' onClick={handleMyWaitingBooks}>My waiting books</button>
                        <span>{userWaitingBooks?.count}</span>



                    </div>
                    <Link to="/addBook"> Add new books</Link>
                </div>
              <div>

              <div>
          {userBooks?.books?.map((book) => (
            <div key={book?.bookId} className="card-block-wrapper">
              <div className="card-block">
                <img className="card-block__image" src={book?.cover} alt="book cover" />
                <div className="card-block-desc">
                  <p className="card-block-desc__top">{book?.title}</p>
                  <p className="card-block-desc__top">{book?.author}</p>
                  <p className="card-block-desc__bottom">{book?.category}</p>
                  <p className="card-block-desc__bottom">{book?.language}</p>
                  <button className="button button-card" onClick={() => getBookById(book.bookId)}> More info </button>
                </div>
              </div>
            </div>
          ))}
        </div>

                
                    {/* {items.map(({ bookId, title, author, category, language, cover }) => (
                        <div key={bookId} className="card-block-wrapper">
                            <div className="card-block">
                                <img className="card-block__image" src={cover} alt="card" />
                                <div className="card-block-desc">
                                    <p className="card-block-desc__top">{title}</p>
                                    <p className="card-block-desc__top">{author}</p>
                                    <p className="card-block-desc__bottom">{category}</p>
                                    <p className="card-block-desc__bottom">{language}</p>
                                    <button className="button button-card" onClick={() => getBookById(bookId)}> More info </button>
                                </div>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export default Library;
>>>>>>> 8977cae69c94aac8b4d8bebd22b9174db0a2992f

