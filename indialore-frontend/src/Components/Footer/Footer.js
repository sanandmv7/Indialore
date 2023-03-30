import React from 'react';
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="section-p1">
      <div className="col">
        <div className="logo">
          <h4>INDIA<span className="danger">LORE</span></h4>
        </div>
        <p><strong>Address:</strong> MNNIT ALLAHABAD, Prayagraj, UP, India.</p>
        <p><strong>Phone No.:</strong> +91-9988776655</p>
        <p><strong>Mail:</strong> contact@indialore.com</p>
      </div>

      <div className="col">
        <h4>About</h4>
        <Link className="footer-link" to="/story"> Our Story</Link>
        <Link className="footer-link" to="/contact"> Contact Us</Link>
        <Link className="footer-link" to="/policy"> Privacy policy</Link>
      </div>

      <div className="col">
        <h4>Support</h4>
        <Link className="footer-link" to="/payments"> Payments</Link>
        <Link className="footer-link" to="/return"> Return/Exhange</Link>
        <Link className="footer-link" to="/shipment"> Shipment</Link>
        <Link className="footer-link" to="/tnc"> Terms &amp; Conditions</Link>
      </div>

      <div className="col">
        <h4>Customer Care</h4>
        <p><strong>Timing:</strong> 10 AM - 6 PM (Mon - Fri)</p>
        <p><strong>Call:</strong> 8888 0909 1234</p>
      </div>

      <div className="copyright">
        <p>© 2023, IndiaLore - Come Live India</p>
      </div>
    </footer>
  );
}

export default Footer;
