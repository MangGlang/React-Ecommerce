import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Book = ({ book }) => {
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
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
            // key index only required when mapping arrays
            new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index}/>)
        }
        {
            // if book rating is integer, do nothing. otherwise, print half star
            // Number.isInteger(book.rating) ? '' : <FontAwesomeIcon icon="star-half-alt"/>

            // if first condition = true, then render and display half stars onto paeg
            // if first condition = false, render nothing.
            // if number is not integer, then print half star. 
            !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt"/>
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
