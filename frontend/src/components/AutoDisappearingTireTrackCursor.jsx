import React, { useState, useEffect, useCallback } from "react";

const TireTrackSVG = ({ rotation }) => (
  <svg width="40" height="20" style={{ transform: `rotate(${rotation}deg)` }}>
    <defs>
      <pattern
        id={`tirePattern_${Date.now()}`}
        patternUnits="userSpaceOnUse"
        width="8"
        height="8"
        patternTransform="rotate(45)"
      >
        <rect width="2" height="8" fill="black" x="0" y="0" />
        <rect width="2" height="8" fill="black" x="4" y="0" />
      </pattern>
    </defs>
    <rect
      x="2"
      y="2"
      width="12"
      height="16"
      fill={`url(#tirePattern_${Date.now()})`}
      rx="1"
    />
    <rect
      x="26"
      y="2"
      width="12"
      height="16"
      fill={`url(#tirePattern_${Date.now()})`}
      rx="1"
    />
  </svg>
);

const AutoDisappearingTireTrackCursor = () => {
  const [tireMarks, setTireMarks] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [prevPosition, setPrevPosition] = useState({ x: -100, y: -100 });

  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });

      const angle = Math.atan2(
        clientY - prevPosition.y,
        clientX - prevPosition.x
      );
      const degrees = (angle * 180) / Math.PI;

      const newMark = {
        id: Date.now(),
        x: clientX,
        y: clientY,
        rotation: degrees,
        createdAt: Date.now(),
      };

      setTireMarks((prevMarks) => [...prevMarks, newMark].slice(-30)); // Keep only the last 30 marks
      setPrevPosition({ x: clientX, y: clientY });
    },
    [prevPosition]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setTireMarks((prevMarks) =>
        prevMarks.filter((mark) => now - mark.createdAt < 2000)
      ); // Remove marks older than 2 seconds
    }, 100);

    return () => clearInterval(cleanupInterval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      aria-hidden="true"
    >
      {tireMarks.map((mark) => (
        <div
          key={mark.id}
          style={{
            position: "absolute",
            left: mark.x - 20,
            top: mark.y - 10,
            opacity: 1 - (Date.now() - mark.createdAt) / 2000, // Fade out over 2 seconds
          }}
        >
          <TireTrackSVG rotation={mark.rotation} />
        </div>
      ))}
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "2px solid black",
          position: "absolute",
          left: cursorPosition.x - 16,
          top: cursorPosition.y - 16,
          transition: "all 0.1s ease-out",
          transform: "translate(0, 0)",
        }}
      />
    </div>
  );
};

export default AutoDisappearingTireTrackCursor;
