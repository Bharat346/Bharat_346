import React, { useEffect, useState, useMemo } from "react";
import "./bg.css";

const BG = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const numSquares = 20; // Fixed number of squares as in original

  useEffect(() => {
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        });
      }, 100);
    };

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const squares = useMemo(() => {
    return Array.from({ length: numSquares }).map((_, i) => {
      const randomLeft = Math.random() * dimensions.width;
      const randomSize = Math.random() * 50 + 20;
      const randomDuration = Math.random() * 5 + 5;
      const randomDelay = Math.random() * 3;
      const randomOpacity = Math.random() * 0.3 + 0.4; // Slightly adjusted opacity range
      const randomBorderRadius = `${Math.random() * 10 + 10}px`; // Subtle variation in border radius

      return (
        <li
          key={i}
          style={{
            left: `${randomLeft}px`,
            width: `${randomSize}px`,
            height: `${randomSize}px`,
            animationDuration: `${randomDuration}s`,
            animationDelay: `${randomDelay}s`,
            borderColor: `rgba(255, 124, 42, ${randomOpacity})`,
            borderRadius: randomBorderRadius
          }}
        />
      );
    });
  }, [numSquares, dimensions.width]);

  return (
    <div className="area" style={{ height: `${dimensions.height}px` }}>
      <ul className="squares">{squares}</ul>
    </div>
  );
};

export default React.memo(BG);