
import React from 'react';

const BookCard = (book) => { 
  const {title, author, image, price, addToCard} = book
  return (
  <div className="card-total">
      <div className="card-image"><img src= {image} />
      <div className="card-title">
        <h4> {title}</h4>
      </div>
      <div className="card-author">
        <span> {author} </span>
      </div>
      <i className="usd"> {price} $</i>
      <div>
        <button onClick={addToCard.bind(this, book)}>Добавить в корзину</button>
      </div>
      </div>
    </div>
  );
};
export default BookCard;