import React, { useState } from "react";
import { useSprings, animated } from "react-spring";
const UseSpringMultiple = () => {
  const [schools, setSchools] = useState([
    {
      name: "Harvard",
      color: "blue",
      from: { width: "0px" },
      to: { width: "400px" },
      config: { mass: 30 },
    },
    {
      name: "Standford",
      color: "green",
      from: { width: "0px" },
      to: { width: "320px" },
      config: { mass: 23 },
    },
    {
      name: "combridge",
      color: "yellow",
      from: { width: "0px" },
      to: { width: "200px" },
      config: { mass: 15 },
    },
  ]);
  const springs = useSprings(
    schools.length,
    schools.map(({ color, name, ...config }) => config)
  );

  return (
    <div className="useSpring" style={{ marginBottom: "12px" }}>
      {springs.map((spring, index) => (
        <animated.div
          key={schools[index].name}
          style={{
            ...spring,
            padding: "10px",
            color: "#fff",
            textAlign: "center",
            marginBottom: "10px",
            backgroundColor: schools[index].color,
          }}
        >
          {`${schools[index].name} ${
            (Number(
              schools[index].to.width.substring(
                0,
                schools[index].to.width.length - 2
              )
            ) *
              100) /
            400
          } % `}
        </animated.div>
      ))}
      <hr></hr>
    </div>
  );
};

export default UseSpringMultiple;
