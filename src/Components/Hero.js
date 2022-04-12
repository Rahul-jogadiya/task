import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <main>
      <Header />
      <section className="hero">
        <div className="heading">
          We turn <span>data</span> into <span>dollers</span>
        </div>
        <div className="info">
          we saw data as strategic resource in letting organization achieve
          their top-line and bottom-line growth.
        </div>
      </section>
    </main>
  );
};

export default Hero;
