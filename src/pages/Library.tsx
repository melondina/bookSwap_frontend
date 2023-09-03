import React from 'react';
import { Link } from 'react-router-dom';
import MyLibraryBox from '../components/MyLibraryBox.tsx';
import Cards from '../components/Cards/index.tsx';

const Library: React.FC = () => {
    return (
        <div className='container'>
            <h2 className="content__title">My Library</h2>
            <div className='content__items'>
                <div>
                    <MyLibraryBox />
                    <Link to="/addBook"> Add new books</Link>
                </div>
                <Cards />
            </div>
        </div>
    )
}

export default Library;