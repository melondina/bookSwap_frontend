import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
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

interface ICardProps {
    slice?: number; 
}



const Cards: React.FC<ICardProps> = ({ slice }) => {

    const items = useSelector((state: IBooksObject | undefined) => state?.cards?.items || []);
    // console.log("items", items[0].title);
   console.log("items", items && items.length > 0 ? items[0].title : "No items");

    
    const navigate = useNavigate();

    const displayedItems = slice ? items.slice(0, slice) : items;
    console.log(displayedItems)
    
    const getBookById = (bookId: number) => {
        navigate(`/bookInfo/${bookId}`)
        console.log(bookId)
    }

    useEffect(() => {console.log("Cards")})


    return (
        <>
            {displayedItems.map(({ bookId, title, author, category, language, cover }) => (
                
        <div key={bookId} className="card-block-wrapper">
            <div className="card-block">
                <img className="card-block__image" src={cover} alt="card" />
                <div className="card-block-desc">
                    <p className="card-block-desc__top">{title}</p>
                    <p className="card-block-desc__top">{author}</p>
                    <p className="card-block-desc__bottom">{category}</p>
                    <p className="card-block-desc__bottom">{language}</p>
                    <button className="button button-card" onClick={() => getBookById(bookId)}> More info </button>
                </div>
            </div>
        </div>
        ))}
        </>
    );
}


<<<<<<< HEAD:src/components/Card/index.tsx
export default Card;



=======
export default Cards;
>>>>>>> 8977cae69c94aac8b4d8bebd22b9174db0a2992f:src/components/Cards/index.tsx


