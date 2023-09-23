import React from "react";
import Header from "../components/general/header/Header";
import Nav from "../components/general/header/Nav";
import Hero from "../components/general/header/Hero";
const Homepage = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Hero />
    </>
  );
};

export default Homepage;
