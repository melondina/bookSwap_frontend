import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



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

    const {id} = useParams();
    console.log(id);

    const [book, setBook] = useState<IBooks | null>(null);

    useEffect(() => {

        const fetchBook = async () => {
          try {
            const response = await axios.get(`/api/books/${id}/detail`);
            if(response?.status === 200) {
                setBook(response.data);
            }
            console.log("dataBook", response.data.title);
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
            <button className='button'>Get book</button>
        </div>
    )}

    export default BookInfo;