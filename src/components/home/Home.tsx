import React, { FC } from "react";
import Footer from "../shared/Footer";
import Header from "./Header";
import Main from "./Main";

const Home: FC = () => {
  return (
    <div className="home">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
