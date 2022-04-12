import React from "react";
import Card from "../Components/cards/Card";
import ai from "./constants/AI.png";
import layer123 from "./constants/Layer123.png";
import layer117 from "./constants/Layer117.png";

const BodyThree = () => {
  return (
    <section className="container">
      <div className="grid grid-2">
        <div className="card-1">
          <Card
            imgurl={layer123}
            title={
              "What gets us running is how discovery-driven AI can unlock value for our clients"
            }
          />
        </div>
        <div className="card-2">
          <Card
            imgurl={layer117}
            title={
              "What gets us running is how discovery-driven AI can unlock value for our clients"
            }
          />
        </div>
        <div className="card-3">
          <Card
            imgurl={ai}
            title={
              "What gets us running is how discovery-driven AI can unlock value for our clients"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default BodyThree;
