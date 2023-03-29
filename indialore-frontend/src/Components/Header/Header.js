import React from 'react';

// import './Header.css';

function Header() {
    return (
        <div className='headerParentDiv'>
            <section id="header">
                <img src="../assets/logo.png" class = "logo" alt="" />
                
                <div>
                    <ul id="navbar">
                        <li><a className="active" href="index.html">Home</a></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="../Login/login.html">Login</a></li>
                        <li><a href="cart.html"><i class="fa-duotone fa-cart-shopping"></i></a></li>
                        
                    </ul>
                </div>
            </section>
        </div>
        
    );
}

export default Header;