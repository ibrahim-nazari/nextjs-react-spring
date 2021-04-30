import React, { useState } from "react";
import { useTrail, animated } from "react-spring";

const divs = ["red", "green", "blue", "orange", "purple", "yellow"];
const Usetrails = () => {
  const springs = useTrail(divs.length, {
    from: { transform: `translate(0px) rotateZ(0deg)` },
    to: { transform: `translate(500px) rotateZ(888484848deg)` },
  });

  return (
    <div style={{ marginBottom: "12px", textAlign: "left" }}>
      {springs.map((spring, index) => (
        <div key={divs[index]}>
          <animated.div
            style={{
              ...spring,
              width: "60px",
              height: "60px",
              borderRadius: "100%",
              display: "inline-block",
              backgroundColor: divs[index],
              marginBottom: "12px",
            }}
          ></animated.div>
        </div>
      ))}
    </div>
  );
};

export default Usetrails;
