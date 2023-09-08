import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    const [userBooks, setUserBooks] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

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

    const handleClick = (objectKey) => {
    setSelectedCategory(objectKey);
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
                            <button className="button button-library" type='button' onClick={() => handleClick('booksInLibrary')}>My books </button>
                            <p>{ userBooks?.booksInLibrary?.count}</p>
                        </div>
                        <div className='library-item__link'>
                            <button className="button button-library" type='button' onClick={() => handleClick('booksInWaitLine')} >My waiting books</button>
                            <p>{userBooks?.booksInWaitLine?.count}</p>
                        </div>
                        <div className='library-item__link'>
                            <button className="button button-library" type='button' onClick={() => handleClick('booksToSend')} >Books To Send</button>
                            <p>{userBooks?.booksToSend?.count}</p>
                        </div>
                        <div className='library-item__link'>
                            <button className="button button-library" type='button' onClick={() => handleClick('booksInHistory')} >My history</button>
                            <p>{userBooks?.booksInHistory?.count}</p>
                        </div>
                    </div>
                    <div>
                        <Link className='library-item-left__bottom button button-library' to="/addBook"> 
                        <p className='button-library__bottom'>+</p>
                        Add new books</Link>
                    </div>
                </div>
                <div className='library-item library-item-right'>
                    {selectedCategory && userBooks && userBooks[selectedCategory] && (
                        userBooks[selectedCategory].books?.map((book) => (
                        <div key={book.bookId} className="card-block-wrapper">
                            <div className="card-block">
                            <img className="card-block__image" src={book.cover} alt="book cover" />
                            <div className="card-block-desc">
                                <p className="card-block-desc__top">{book.title}</p>
                                <p className="card-block-desc__top">{book.author}</p>
                                <p className="card-block-desc__bottom">{book.category}</p>
                                <p className="card-block-desc__bottom">{book.language}</p>
                                <button className="button button-card" onClick={() => getBookById(book.bookId)}> More info </button>
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


