import React from "react";
import SingleSpring from "./UseSpring";
import MultipleSprings from "./UseSprings";
import TrailAnimation from "./UseTrails";

const index = () => {
  return (
    <div
      style={{
        margin: "20px auto 0 auto",
        width: "800px",
        textAlign: "center",
      }}
    >
      <SingleSpring />
      <MultipleSprings />
      <TrailAnimation />
    </div>
  );
};

export default index;
