import React from 'react';


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




const BookInfo: React.FC<IBooks> = ({
    bookId,
    title,
    author,
    description,
    category,
    language,
    pages,
    publisherDate,
    cover,
    location,
    queueSize
}) => {


    return (
        <div className='container'>
            <div >
            <img src={cover} alt="Book" />
            </div>
            <div>
                <p>{title}</p>
                <p>{author}</p>
                <p>{category}</p>
                <p>{language}</p>
                <p>Description: {description}</p>
                <p>Number of pages: {pages}</p>
                <p>Year of publication: {publisherDate}</p>
                <p>Wait line: {queueSize}</p>
                <p>Current location: {location}</p>
                <p>{title}</p>
            </div>
            <button className='button'>Get book</button>
        </div>
    )}

    export default BookInfo;