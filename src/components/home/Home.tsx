import React, { FC } from "react";
import Header from "./Header";
import Main from "./Main";

const Home: FC = () => {
  return (
    <div className="home">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
