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
        <div>
            <div>
            <img src={book?.cover} alt="Book" />
            </div>
            <div>
                <p>{book?.title}</p>
                <p>{book?.author}</p>
                <p>{book?.category}</p>
                <p>{book?.language}</p>
                <p>Description: {book?.description}</p>
                <p>Number of pages: {book?.pages}</p>
                <p>Year of publication: {book?.publisherDate}</p>
                <p>Wait line: {book?.queueSize}</p>
                <p>Current location: {book?.location}</p>
            </div>
            <button className='button' onClick={() => 
            {user===null ? navigate("/login") : handleGetBook()} }>Get book</button>
        </div>
    )}

    export default BookInfo;