import React from 'react';

const Book: React.FC = ({ books, onBookClick }) => {

    return (
    <div>
      {books?.map((book) => (
        <div key={book?.bookId} className="card-block-wrapper">
          <div className="card-block">
            <img className="card-block__image" src={book?.cover} alt="book cover" />
            <div className="card-block-desc">
              <p className="card-block-desc__top">{book?.title}</p>
              <p className="card-block-desc__top">{book?.author}</p>
              <p className="card-block-desc__bottom">{book?.category}</p>
              <p className="card-block-desc__bottom">{book?.language}</p>
              <button className="button button-card" onClick={() => onBookClick(book.bookId)}> More info </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    )
}

export default Book;
