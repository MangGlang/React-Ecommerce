import "./index.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books.jsx";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";

function App() {
  // cart logic -- Hook Array
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
    // can't have .log here b/c this function is "asynchronous" = waiting and will execute later.
  }

  function changeQuantity(book, quantity) {
    // to change the quantity of the cart
    // loop through all items in array: if the book of the item
    // passed in is the one with the quantity changing, then update quantity

    // 1. Passing in a new array into cart
    // 2. New array: If we find the new item we're working with, update quantity
    // 3. Otherwise, return same item
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              // if item is book, return

              // adding a "+" before quantity converts the string into an integer
              ...item,
              quantity: +quantity,
            } // otherwise, do nothing
          : item
      )
    );
  }

  // whenever cart changes, console log
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />

        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        {/* Passing in props requires the use of "render" & arrow functions */}
        <Route
          path="/cart"
          render={() => (
            <Cart books={books} cart={cart} changeQuantity={changeQuantity} />
          )}
        />
        {/* when changeQuantity value is changed in cart, then execute command: console log  */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// function addMultipleBooksToCart(book) {
//   const dupeItem = cart.find(item => +item.id === +book.id)
//   if (dupeItem) {
//     // dupeItem.quantity += 1;
//     // replacing first book; iterate over all items in cart and add to cart
//     setCart(cart.map(item => {
//       if (item.id === dupeItem.id) {
//         return {
//           ...item, quantity: item.quantity + 1,
//         }
//       }
//       else {
//         return item;
//       }
//     }))
//   }
//   else {
//     // Spread Operator: creates new array that
//     // takes all properties of the book; title, price, url, salePrice, quantity, etc: and line below adds quantity to that
//     setCart([...cart, {...book, quantity: 1}])
//   }
//   // console.log('add to cart', book);
//   // Using hooks with arrays: must pass in new array
//   // Spread operator: using all elements in cart array & adding book

// }
// // Render page on mount & display text on website's console
// useEffect(() => {
//   console.log(cart);
// }, [cart])
