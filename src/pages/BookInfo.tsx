import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';



interface IBooks {
    bookId: number,
    title: string,
    author: string,
    description: string,
    category: string,
    language: string,
    pages: number,
    publisherDate: number,
    cover: string,
    location: string,
    queueSize: number
}



const BookInfo: React.FC<IBooks> = () => {

    const navigate= useNavigate();
    const user = useSelector((state) => state.user.user);

    const {id} = useParams();
    console.log("bookId", id);

    // console.log("userId", user.id)


    const [book, setBook] = useState<IBooks | null>(null);

    const [getBook, setGetBook] = useState({
        bookId: '',
        userId: ''
    })

    interface IGetBook {
        bookId: string,
        userId: string
    }

    
    const getBookCreating = async (getBook: IGetBook) => {
        try {
            const newGetBook = {
                ...getBook,
                userId: user.id,
                bookId: id
            };
            console.log("newGetBook", newGetBook)
            const data = await axios.post(`/api/books/getting`, newGetBook);
            console.log("getBookCreating", data)
            return data;
        } catch (error) {
            console.log("getBookCreating",error)
        }
    }

    const handleGetBook = async () => {
        try {
            const getBookData = await getBookCreating(getBook);
            if(getBookData?.status===200) {
                navigate("/library");
            } else (navigate("/"))
            console.log("getBookData", getBookData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        const fetchBook = async () => {
          try {
            const response = await axios.get(`/api/books/${id}/detail`);
            if(response?.status === 200) {
                setBook(response.data);
            }
            // console.log("dataBook", response.data.title);
          } catch (error) {
            console.error('Ошибка при запросе к серверу:', error);
          }
        };
    
        fetchBook();
      }, [id]);


    return (
        <div className='book'>
            <div className='book__conteiner'>
                <div className='book__cover'>
                    <img className='book__img' src={book?.cover} alt="Book" />
                </div>
                <div className='book__info'>
                    <p className='book__title'>{book?.title}</p>
                    <p className='book__line__1'>{book?.author}</p>
                    <p className='book__line'>Genre: {book?.category}</p>
                    <p className='book__line'>Language: {book?.language}</p>
                    <p className='book__line__1'>Number of pages: {book?.pages}</p>
                    <p className='book__line'>Year of publication: {book?.publisherDate}</p>
                    <p>Description:</p>
                    <p className='book__line'> {book?.description}</p>
                    <p className='book__line'>Wait line: {book?.queueSize}</p>
                    <p className='book__line'>Current location: {book?.location}</p>
                    <button className='button book__button' onClick={() => 
                    {user===null ? navigate("/login") : handleGetBook()} }>Get book</button>

                </div>
            </div>
        </div>

    )}

    export default BookInfo;