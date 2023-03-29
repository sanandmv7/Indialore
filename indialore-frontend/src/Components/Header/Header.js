import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <Fragment>
            <section id="header">
                <img src="../assets/logo.png" class = "logo" alt="" />
                
                <div>
                    <ul id="navbar">
                        <Link className="link active" to='/'>Home</Link>
                        <Link className="link" to='/shop'>Shop</Link>
                        <Link className="link" to='/about'>About Us</Link>
                        <Link className="link" to='/login'>Login</Link>
                        <Link className="link fa-duotone fa-cart-shopping" to='/cart'>Cart</Link>
                    </ul>
                </div>
            </section>
        </Fragment>
        
    );
}

export default Header;