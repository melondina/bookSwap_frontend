import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useSelector } from 'react-redux';
import { navigationStatus } from '../redux/slices/navigationSlice.js'
import ErrorComponent from "../components/ErrorComponent.tsx";



const AddNewBook: React.FC = () => {

    const user = useSelector((state) => state.user.user);
    const [errorApi, setErrorApi] = useState(null);
    const [httpStatus, setHttpStatus] = useState(null);
    
    const getNavigationStatus = useSelector((state) => state.navigation);
    console.log("🚀 ~ file: AddNewBook.tsx:14 ~ getNavigationStatus:", getNavigationStatus)
    
    
    const [createNewBook, setCreateNewBook] = useState({
        title: '',
        author: '',
        description: '',
        categoryId: '',
        languageId: '',
        pages: '',
        publisherDate: '',
        cover: '',
        owner: ''
    });
    // console.log("AddNewBook")

    interface ICreateNewBook {
        title: string,
        author: string,
        description: string,
        categoryId: string,
        languageId: string,
        pages: string,
        publisherDate: string,
        cover: string,
        owner: string
    }

    const navigate = useNavigate();
    // console.log(userId)

    const getLibrary =() =>{
        navigate(`/library`);
    }

    const bookCreating = async (createNewBook: ICreateNewBook) => {
        try {
            const newBookData = {
                ...createNewBook,
                  owner: user.id,
            };
            console.log(newBookData)
            const data = await axios.post(`/api/books`, newBookData);
            console.log("bookCreating", data)
            return data;
        } catch (error) {
            console.log("bookCreating",error)
            setHttpStatus(error.response.status);
            setErrorApi(error.response);
            return { status: error.response.status, data: error.response };
                   
        }
    }
    

    const handleAddBookForm = (event: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = event.target;
        setCreateNewBook((prev) => ({
            ...prev, [name]:value
        }))
    }


    const handleAddNewBookSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const bookData = await bookCreating(createNewBook);
            const { status, data } = bookData;
            
            if(status===201) {
                navigate("/library");
            }if(status===400){
                setHttpStatus(status);
                setErrorApi(data.data);
            }
            else {
                setHttpStatus(status);
                setErrorApi(data);
                }
        } catch (error) {
            console.log(error)
        }
    }

    const { id } = useParams();
    console.log("bookId", id);
       

    return (
        <div className='container'>
            <h2 className="content__title">Add New Book</h2>
            <div className="addNewBook__items">
            {errorApi && (
          <ErrorComponent error={errorApi} httpStatus={httpStatus} />
        )}
            <form onSubmit={handleAddNewBookSubmit} className='form addNewBook-wrap'>
                <div className='form__wrap addNewBook-wrap__top'>
                    <label  className='form__label' htmlFor="image">UPLOAD A BOOK COVER</label>
                    <input className='form__input' type="url" name="cover" onChange={handleAddBookForm} value={createNewBook.cover} />
                </div>
                <div className="addNewBook-wrap__center-left">
                <div className='form__wrap'>
                        <label  className='form__label' htmlFor="bookName">BOOK NAME</label>
                        <input className='form__input' type="text" name="title" onChange={handleAddBookForm} value={createNewBook.title}placeholder='Enter a book name' />
                </div>
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="author">AUTHOR</label>
                    <input className='form__input' type="text" name="author" onChange={handleAddBookForm} value={createNewBook.author} placeholder='Enter a book author' />
                </div>
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="genre">GENRE</label>
                    <select className='form__input' name="categoryId" onChange={handleAddBookForm} value={createNewBook.categoryId} >
                        <option value="" disabled>Choose genre</option>
                        <option value="1">Esse</option>
                        <option value="2">Detective</option>
                        <option value="3">Fantasy</option>
                        <option value="4">Roman</option>
                        <option value="5">Poetry</option>
                        <option value="6">Stories</option>
                        <option value="7">Biography</option>
                        <option value="8">History</option>
                        <option value="9">Fantastic</option>
                        <option value="10">Adventures</option>
                        <option value="11">Fairy tales</option>
                        <option value="12">Publicity</option>
                        <option value="13">Documentary prose</option>
                        <option value="14">Humor</option>
                        <option value="15">Horrors</option>
                        <option value="16">Fanfic</option>
                    </select>
                </div>

                </div>
                <div className="addNewBook-wrap__center-right">
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="pages">PAGE NUMBERS</label>
                    <input className='form__input' type="number" name="pages" onChange={handleAddBookForm} value={createNewBook.pages} placeholder='Enter number of pages' />
                </div>
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="year">YEAR OF PUBLICATION</label>
                    <input className='form__input' type="number" name="publisherDate" onChange={handleAddBookForm} value={createNewBook.publisherDate} placeholder='Enter year of publication' />
                </div>
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="language">LANGUAGE</label>
                    <select className='form__input' name="languageId" onChange={handleAddBookForm} value={createNewBook.languageId} >
                        <option value="" disabled>Enter a book language</option>
                        <option value="1">English</option>
                        <option value="2">German</option>
                        <option value="3">French</option>
                        <option value="4">Russian</option>
                        <option value="5">Italian</option>
                        <option value="6">Ukrainian</option>
                    </select>
                </div>
                </div>
                
                <div className="addNewBook-wrap__bottom">
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="desc">DESCRIPTION</label>
                    <textarea className='form__input' name="description" onChange={handleAddBookForm} value={createNewBook.description} placeholder='Write a description of a book' />
                </div>
                <div >
                    <button type='submit' className='button button-profile'>Add</button>
                    <button type='reset' className='button button-profile button-profile__right' onClick={()=>getLibrary()}>Cancel</button>
                </div>
                </div>
            </form>
            </div>
        </div>
    )}

    export default AddNewBook;