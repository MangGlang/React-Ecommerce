import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LibraryLogo from '../assets/Library.svg';

const Nav = () => {
    function openMenu() {
        document.body.classList += " menu--open";
    }

    function closeMenu() {
        document.body.classList.remove("menu--open");
    }

    return (
        <nav>
            <div className="nav__container">
                <a href="/">
                    <img src={LibraryLogo} alt="" className="logo" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="/" className="nav__link">Home</a>
                    </li>
                    <li className="nav__list">
                        <a href="/" className="nav__link">Books</a>
                    </li>
                    {/* openMenu does not have paranthesis, otherwise it would run on mount, showing menu */}
                    {/* if parenthesis are needed for props, write openMenu like so: */}
                    {/* "arrow function": onClick={() => closeMenu(props)} */}
                    <button className='btn__menu' onClick={openMenu}>
                    <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <a href="/cart" className="nav__link">
                            <FontAwesomeIcon icon="shopping-cart" />
                        </a>
                        <span className="cart__length">2</span>
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/" className="menu__link">Home</a>
                        </li>
                        <li className="menu__list">
                            <a href="/" className="menu__link">Books</a>
                        </li>
                        <li className="menu__list">
                            <a href="/" className="menu__link">Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;