import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

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



const Card: React.FC = () => {

    const items = useSelector((state:IBooksObject) => state.cards.items);
    


    return (
        <>
            {items.map(({ bookId, title, author, category, language, cover }) => (
        <div key={bookId} className="card-block-wrapper">
            <div className="card-block">
                <img className="card-block__image" src={cover} alt="card" />
                <div className="card-block-desc">
                    <p className="card-block-desc__top">{title}</p>
                    <p className="card-block-desc__top">{author}</p>
                    <p className="card-block-desc__bottom">{category}</p>
                    <p className="card-block-desc__bottom">{language}</p>
                    <Link to="/bookInfo" className="button button-card"> More info </Link>
                </div>
            </div>
        </div>
        ))}
        </>
    );
}


export default Card;
