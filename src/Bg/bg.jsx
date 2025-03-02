import React, { useEffect, useState } from "react";
import "./bg.css";

const BG = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const numSquares = 20; // Number of squares

  useEffect(() => {
    const updateSize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="area" style={{ height: height }}>
      <ul className="squares">
        {Array.from({ length: numSquares }).map((_, i) => {
          const randomLeft = Math.random() * width; // Random horizontal position
          const randomSize = Math.random() * 50 + 20; // Random size (20px to 70px)
          const randomDuration = Math.random() * 5 + 5; // Random animation duration (5s to 10s)
          const randomDelay = Math.random() * 3; // Random delay (0s to 3s)

          return (
            <li
              key={i}
              style={{
                left: `${randomLeft}px`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                animationDuration: `${randomDuration}s`,
                animationDelay: `${randomDelay}s`,
              }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default BG;
