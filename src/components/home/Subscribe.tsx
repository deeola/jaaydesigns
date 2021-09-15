import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <p className="subscribeText">
        Subscribe to our mailing list to get notified of new arrivals and
        fashion tips
      </p>
      <form className="form">
        <input type="email" placeholder="Email Address" />
        <button>SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default Subscribe;
