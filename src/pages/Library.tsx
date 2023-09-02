import React from 'react';
import { Link } from 'react-router-dom';
import MyLibraryBox from '../components/MyLibraryBox.tsx';
import Card from '../components/Card/index.tsx';

const Library: React.FC = () => {
    return (
        <div>
            <h3>My Library</h3>
            <MyLibraryBox />
            <Link to="/addBook"> Add new books</Link>
            <Card />
        </div>
    )}

    export default Library;