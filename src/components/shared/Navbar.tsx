import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="upperNavDiv">
          <p>JaayDesigns</p>
          <div className="searchContainer">
            <input type="text" />
            <i className="fas fa-search"></i>
          </div>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">Collections</a>
              <a href="#">Sale</a>
              <a href="#">What's New</a>
              <a href="#">Size Chart</a>
              <a href="#">Book a consulation</a>
              <a href="#">About us</a>
              <a href="#">Account</a>
            </li>
          </ul>
          <div className="cartDiv">
            <i className="fas fa-shopping-cart"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
