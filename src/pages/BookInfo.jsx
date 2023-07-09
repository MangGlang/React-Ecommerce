import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Book from "../components/ui/Book";

const BookInfo = ({ books }) => {
  // React Router --> useParams() = allows you to take book.id value
  // Destruct "id" to target main value
  const { id } = useParams();
  //   "+" before variables = makes variable an integer in JS
  const book = books.find((book) => +book.id === +id);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={book.url}
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  {book.title}
                </h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat quis temporibus asperiores maiores magnam aliquid
                    vero earum exercitationem error numquam corporis amet quod
                    totam minus, voluptate veniam excepturi sequi! Repudiandae.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat quis temporibus asperiores maiores magnam aliquid
                    vero earum exercitationem error numquam corporis amet quod
                    totam minus, voluptate veniam excepturi sequi! Repudiandae.
                  </p>
                </div>
                <button className="btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
            {books
            // adding "+"'s will re-render the page upon clicking a book
            // recommend books are swapped out because they are being filtered
            .filter(book => book.rating === 5 && +book.id !== +id )
            .slice(0,4)
            // mapping an array to prevent changes on original data
            .map(book => <Book book={book} key={book.id} />)
            }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
