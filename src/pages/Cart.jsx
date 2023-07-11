import React from "react";

const Cart = ( { cart, changeQuantity, removeBook }) => {

  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +(((item.salePrice || item.originalPrice)*item.quantity))
    })
    return price;
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <div className="cart__title">Cart</div>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {/* For every item in cart, we want to add new cart item */}
                {cart.map(book => {
                  return (
                    <div className="cart__item">
                      <div className="cart__book">
                        <img
                          src={book.url}
                          alt=""
                          className="cart__book--img"
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <span className="cart__book--price">${(book.salePrice || book.originalPrice).toFixed(2)}</span>
                          <button className="cart__book--remove" onClick={() => removeBook(book)}>Remove</button>
{/* On click, remove all book properties from cart */}
{/* By removing a certain book (all of its quantities), price should be updated automatically */}
{/* Target book by targetting quantity value */}
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={book.quantity}
                          onChange={(event) => changeQuantity(book, event.target.value)}
                        />
                      </div>
                      <div className="cart__total">${((book.salePrice || book.originalPrice)*book.quantity).toFixed(2)} </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>${(total() * 0.9).toFixed(2)}</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>${(total() * 0.1).toFixed(2)}</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>${total().toFixed(2)}</span>
              </div>
              <button
                className="btn btn__checkout no-cursor"
                onClick={() => alert(`Haven't gotten around to doing this :(`)}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
