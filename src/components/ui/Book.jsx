import React from "react";
import { Link } from "react-router-dom"
import Rating from "./Rating";

const Book = ({ book }) => {
  return (
    <div className="book">
      <Link to="/books/1">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="/books/1" className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating}/>
      <div className="book__price">
        {/* Does book sale price exist? */}
        {/* If sale exists, print original and sale price */}
        {/* If no sale, then print only original price. */}
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice}</>
        )}
      </div>
    </div>
  );
};

export default Book;
