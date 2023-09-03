import React from 'react';
import MyLibraryBox from '../components/MyLibraryBox.tsx';

const AddNewBook: React.FC = () => {
    return (
        <div className='container'>
            <h2 className="content__title">
                Add New Book
            </h2>
            <div className="addNewBook__items content__items">
                <div>
                <MyLibraryBox />
                </div>
            <form action="" className='form addNewBook-wrap'>
                <div className='form__wrap addNewBook-wrap__top'>
                    <label  className='form__label' htmlFor="image">UPLOAD A BOOK COVER</label>
                    <input className='form__input' type="url" />
                </div>
                <div className="addNewBook-wrap__center-left">
                <div className='form__wrap'>
                        <label  className='form__label' htmlFor="bookName">BOOK NAME</label>
                        <input className='form__input' type="text" placeholder='Enter a book name' />
                </div>
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="author">AUTHOR</label>
                    <input className='form__input' type="text" placeholder='Enter a book author' />
                </div>
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="genre">GENRE</label>
                    <input className='form__input' type="text" placeholder='Enter a book genre' />
                </div>

                </div>
                <div className="addNewBook-wrap__center-right">
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="pages">PAGE NUMBERS</label>
                    <input className='form__input' type="number" placeholder='Enter number of pages' />
                </div>
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="year">YEAR OF PUBLICATION</label>
                    <input className='form__input' type="number" placeholder='Enter year of publication' />
                </div>
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="language">LANGUAGE</label>
                    <input className='form__input' type="text" placeholder='Enter a book language' />
                </div>


                </div>
                <div className="addNewBook-wrap__bottom">
                <div className='form__wrap'>
                    <label  className='form__label' htmlFor="desc">DESCRIPTION</label>
                    <textarea className='form__input' placeholder='Write a description of a book' />
                </div>
                <div >
                    <button type='submit' className='button button-profile'>Add</button>
                    <button type='reset' className='button button-profile button-profile__right'>Cancel</button>
                </div>


                </div>
            </form>
            </div>
        </div>
    )}

    export default AddNewBook;