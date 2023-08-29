import React from "react";

type CardProps = {
    id: string;
    title:string,
    imageUrl: string,
    author:string,
    genre:string,
    language:string
}


const Card: React.FC<CardProps> = ({ id, title, author, genre, language, imageUrl }) => {

    return (
        <div className="card-block-wrapper">
            <div className="card-block">
                <img className="card-block__image" src={imageUrl} alt="card" />
                <div className="card-block-desc">
                    <p className="card-block-desc__top">{title}</p>
                    <p className="card-block-desc__top">{author}</p>
                    <p className="card-block-desc__bottom">{genre}</p>
                    <p className="card-block-desc__bottom">{language}</p>
                    <button className="button button-card">
                        <span>More info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Card;
