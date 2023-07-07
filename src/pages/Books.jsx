import React, { useState } from "react";
import Book from "../components/ui/Book";

const Books = ({ books: initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);

  function filterBooks(filter) {
    console.log(filter);
    if (filter === "LOW_TO_HIGH") {
      // Without changing the original books properties, we are "slicing" a clone
      // Essentially: Pass in a new array without changing "books" by slicing, which creates a copy of the array
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }
    if (filter === "HIGH_TO_LOW") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (b.salcePrice || b.originalPrice) -
              (a.salePrice - a.originalPrice)
          )
      );
    }
    if 
  }
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__Header--title">
                  All Books
                </h2>
                {/* Using an arrow function to capture the event allows you to pass */}
                {/* that event as an argument to the function specified below */}
                {/* In doing so, the filter's value will be displayed via console */}
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {
                  // Show all books by importing data set
                  books.map((book) => (
                    <Book book={book} key={book.id} />
                  ))
                }
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
