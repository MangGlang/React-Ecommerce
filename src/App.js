import "./index.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books.jsx";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books}/>} />
        <Route path="/books/:id" render={() => <BookInfo books={books} />} />
        {/* Passing in props requires the use of "render" & arrow functions */}
        <Route path="/cart" render={() => <Cart books={books}/>} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
