import React from "react";
import { useSpring, animated } from "react-spring";

const index = () => {
  const styles = useSpring({
    loop: true,
    to: { rotateZ: 180 },
    from: { rotateZ: 0 },
  });
  return (
    <div style={{ margin: "20px 0 0 0", width: "800px", textAlign: "center" }}>
      <animated.div
        style={{
          width: 80,
          height: 80,
          backgroundColor: "#46e891",
          borderRadius: 16,
          ...styles,
        }}
      />
    </div>
  );
};

export default index;
