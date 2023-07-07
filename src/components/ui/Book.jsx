import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Book = ({ book }) => {
    const rating = 4;

  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book" />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        {
            // underscore "_" element = "useless" element
            new Array(5).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index}/>)
        }
      </div>
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
