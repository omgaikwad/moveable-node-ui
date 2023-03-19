import React from "react";
import styles from "./Node.module.css";

const Node = (props) => {
  console.log(props);
  const { id, x, y, onMove } = props;
  const handleMouseDown = (e) => {
    const initialMouseX = e.clientX;
    const initialMouseY = e.clientY;

    const handleMouseMove = (e) => {
      // calculate new node position
      const newX = x + e.clientX - initialMouseX;
      const newY = y + e.clientY - initialMouseY;

      onMove(id, { x: newX, y: newY });
    };

    const handleMouseUp = (e) => {
      // remove event listeners
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      style={{ position: "absolute", top: y, left: x }}
      onMouseDown={handleMouseDown}
      className={styles["node"]}
    >
      Node
    </div>
  );
};

export default Node;
