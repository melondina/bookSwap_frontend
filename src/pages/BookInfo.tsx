import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { navigationStatus } from '../redux/slices/navigationSlice.js'
import ErrorComponent from "../components/ErrorComponent.tsx";





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
    queueSize,
}) => {

    const getNavigationStatus = useSelector((state) => state.navigation);
    // console.log("🚀 ~ file: BookInfo.tsx:27 ~ getNavigationStatus:", getNavigationStatus)

    const [errorApi, setErrorApi] = useState(null);
    const [httpStatus, setHttpStatus] = useState(null);
    

    const dispatch = useDispatch();


    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);

    const { id } = useParams();
    console.log("bookId", id);

    // console.log("userId", user.id)


    const [book, setBook] = useState<IBooks | null>(null);

    const [getBook, setGetBook] = useState({
        bookId: '',
        userId: ''
    });

    console.log("getBook.bookId", getBook.bookId);

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
            const responce = await axios.post(`/api/books/getting`, newGetBook);
            console.log("getBookCreating", responce)
            return responce;
        } catch (error) {
            console.log("getBookgetting",error.response)
            return { status: error.response.status, data: error.response};
        }
    }

    const handleGetBook = async () => {
        try {
            const getBookData = await getBookCreating(getBook);
            const { status, data } =getBookData
            if (getBookData?.status === 200) {
                navigate("/library");
            }    else {
                setHttpStatus(status);
                setErrorApi(data);
                }
            //(navigate("/"))
            console.log("getBookData", getBookData)
        } catch (error) {
            console.log(error)
            return { status: error.response.status, data: error.response};
        }
    }

    const sendBookCreating = async (getBook: IGetBook) => {
        try {
            const newSendBook = {
                ...getBook,
                userId: user.id,
                bookId: id
            };
            console.log("newGetBook", newSendBook)
            const data = await axios.post(`/api/books/send/to`, newSendBook);
            console.log("sendBookCreating", data)
            return data;
        } catch (error) {
            console.log("sendBookCreating", error)
            return { status: error.response.status, data: error.response};
        }
    }

    const handleSendBook = async () => {
        try {
            const sendBookData = await sendBookCreating(getBook);
            const { status, data } =sendBookData;
            if (status === 200) {
                navigate("/library");
            }  else {
                setHttpStatus(status);
                setErrorApi(data);
            //(navigate("/"))
            console.log("getBookData", sendBookData)}
        } catch (error) {
            return { status: error.response.status, data: error.response};
        }
    }

    const deleteBookCreating = async (getBook: IGetBook) => {
        try {
            const newDeleteBook = {
                ...getBook,
                userId: user.id,
                bookId: id
            };
            console.log("newDeleteBook", newDeleteBook)

            const response: AxiosResponse<{  }> = await axios.delete(`/api/books/remove`, {
                data: newDeleteBook,
            });

            console.log("deleteBookCreating", response)
            return response.data;
        } catch (error) {
            return { status: error.response.status, data: error.response};
        }
    }

    const handleDeleteBook = async () => {
        try {
            const deleteBookData = await deleteBookCreating(getBook);
            const { status, data } =deleteBookData;
            if (status === 200) {
                navigate("/library");
            }  else {
                setHttpStatus(status);
                setErrorApi(data);
                navigate("/library")
            console.log("deleteBookData", deleteBookData)}
        } catch (error) {
            return { status: error.response.status, data: error.response};
        }
 
    }




    useEffect(() => {

        const fetchBook = async () => {
            try {
                const response = await axios.get(`/api/books/${id}/detail`);
                const { status, data } =response;
                if (status === 200) {
                    setBook(response.data);
                }else {
                    setHttpStatus(status);
                    setErrorApi(data);}
                // console.log("dataBook", response.data.title);
            } catch (error) {
                setHttpStatus(error.response.status);
                setErrorApi(error);
                return { status: error.response.status, data: error.response };
            }
        };

        fetchBook();
    }, [id]);


    return (
        <div className='book'>
            <div className='book__container'>
                <div className='book-img-block'>
                    <img className='book__img' src={book?.cover} alt="Book" />
                </div>
                {errorApi && (
                    <ErrorComponent error={errorApi} httpStatus={httpStatus} />
                    )}
                <div>
                    <p className='book__title'>{book?.title}</p>
                    <p className='book__title'>{book?.author}</p>
                    <p className='book__genre'>{book?.category}</p>
                    <p className='book__genre'>{book?.language}</p>
                    <p className='book__textbold__1'>Description:</p>
                    <p className='book__line'>{book?.description}</p>
                    <div className='book__column'>
                        <div><p className='book__textbold__1'>Number of pages:</p></div>
                        <div><p className='book__textbold__1'>{book?.pages}</p></div>
                    </div>
                    <div className='book__column'>
                        <div><p className='book__textbold'>Year of publication:</p></div>
                        <div><p className='book__textbold'>{book?.publisherDate}</p></div>
                    </div>
                    <div className='book__column'>
                        <div><p className='book__textbold'>Wait line:</p></div>
                        <div><p className='book__textbold'>{book?.queueSize}</p></div>
                    </div>
                    <p className='book__textbold__1'>Current Location:</p>
                    <p className='book__textbold'>{book?.location}</p>
                    <div className='book__button'>
                        {getNavigationStatus === navigationStatus.get ?<button className='button' onClick={() => { user === null ? navigate("/login") : handleGetBook() }}>Get book</button> : null}
                        {getNavigationStatus === navigationStatus.update ?<button className='button' onClick={() => navigate(`/updateBook/${id}`, { state: {book}})} >Update Book</button> : null}
                        {getNavigationStatus === navigationStatus.send ?<button className='button' onClick={handleSendBook}>Send Book</button> : null}
                        {getNavigationStatus === navigationStatus.history ? <button className='button' >Leave a comment</button> : null}
                        {getNavigationStatus === navigationStatus.delete ? <button className='button' onClick={handleDeleteBook} >Delete</button> : null}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BookInfo;