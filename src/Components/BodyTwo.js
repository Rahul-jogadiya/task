import React from "react";
import layer117 from "./constants/Layer117.png";

const BodyTwo = () => {
  return (
    <section className="container">
      <div className="grid grid-2">
        <div className="information">
          Smart solutions at the intersection of hypothesis-based analytics,
          discovery driven AI and new data from IoT
          <p className="para">
            ganit has fliped the data sciencevalue chain. we don't start with a
            techniue. for us, consumtion comes first.
          </p>
        </div>
        <div className="diagram">
          <img src={layer117} alt="diagram" />
        </div>
      </div>
    </section>
  );
};

export default BodyTwo;
