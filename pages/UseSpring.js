import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
const UseSpringSingle = () => {
  const [springsingle, setSpring] = useState(false);
  const spring = useSpring({
    from: {
      transform: `translate(0px)`,
    },
    to: {
      transform: springsingle ? `translate(120px)` : `translate(0px)`,
    },
    config: {
      mass: 6,
    },
  });
  return (
    <div className="useSpring" style={{ marginBottom: "12px" }}>
      <animated.div style={{ ...spring, display: "inline-block" }}>
        Translated Div
      </animated.div>
      <hr></hr>
      <button
        style={{ marginTop: "30px" }}
        onClick={() => setSpring(!springsingle)}
      >
        show useSpring animation{" "}
      </button>
    </div>
  );
};

export default UseSpringSingle;
