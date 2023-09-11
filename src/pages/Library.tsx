import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { navigationStatus, setNavigation } from '../redux/slices/navigationSlice.js'

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

interface IStatus {
    [key: string]: string
}

const Library: React.FC = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    const items = useSelector((state:IBooksObject) => state.cards.items);
    console.log("items", items);
    const user = useSelector((state) => state.user.user);

    const [userBooks, setUserBooks] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);


    const getNavigationStatus: IStatus = useSelector((state) => state.navigation);
    // console.log("🚀 ~ file: BookInfo.tsx:27 ~ getNavigationStatus:", getNavigationStatus)



    useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get(`/api/books/all/${user?.id}`, { withCredentials: true });
            console.log("getUsersBooks", response?.data);
            setUserBooks(response?.data);
        } catch (error) {
            console.log("getUsersBooks", error);
        }
    };
    fetchData();
    }, []);

    const handleClick = (objectKey, bla) => {
    setSelectedCategory(objectKey);
    dispatch(setNavigation(bla));
    console.log("🚀 ~ file: Library.tsx:63 ~ handleClick ~ navigateStatus:", bla)
    
    };

    const getBookById = (bookId: number) => {
        navigate(`/bookInfo/${bookId}`)
        console.log(bookId)
    }
    return (
        <div className='container'>
            <h2 className="content__title">My Library</h2>
            <div className='library'>
                <div className='library-item library-item-left'>
                    <div className='library-item library-item-left__top'>
                        <div className='library-item__link'>
                            <button className="button button-library" type='button' onClick={() => handleClick('booksInLibrary', navigationStatus.update)}>My books </button>
                            <p>{ userBooks?.booksInLibrary?.count}</p>
                        </div>
                        <div className='library-item__link'>
                            <button className="button button-library" type='button' onClick={() => handleClick('booksInWaitLine', navigationStatus.delete)} >Want to read</button>
                            <p>{userBooks?.booksInWaitLine?.count}</p>
                        </div>
                        <div className='library-item__link'>
                            <button className="button button-library" type='button' onClick={() => handleClick('booksToSend', navigationStatus.send)} >Books To Send</button>
                            <p>{userBooks?.booksToSend?.count}</p>
                        </div>
                        <div className='library-item__link'>
                            <button className="button button-library" type='button' onClick={() => handleClick('booksInHistory', navigationStatus.history)} >My history</button>
                            <p>{userBooks?.booksInHistory?.count}</p>
                        </div>
                    </div>
                    <div>
                        <button className='library-item-left__bottom button button-library' onClick={() => (navigate("/addBook"))}> 
                        <p className='button-library__bottom'>+</p>
                        Add new book</button>
                    </div>
                </div>
                <div className='library-item library-item-right content__items'>
                    {selectedCategory && userBooks && userBooks[selectedCategory] && (
                        userBooks[selectedCategory].books?.map(({ bookId, title, author, category, language, cover }) => (
                        <div key={bookId} className="card-block-wrapper">
                            <div className="card-block">
                            <img className="card-block__image" src={cover} alt="book cover" />
                            <div className="card-block-desc">
                                <p className="card-block-desc__top">{title}</p>
                                <p className="card-block-desc__top">{author}</p>
                                <p className="card-block-desc__bottom">{category}</p>
                                <p className="card-block-desc__bottom">{language}</p>
                                <button className="button button-card" onClick={() => getBookById(bookId)}> More info </button>
                            </div>
                            </div>
                        </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Library;


