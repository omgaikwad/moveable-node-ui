import React from "react";
import styles from "./Node.module.css";

const Node = (props) => {
  const {
    id,
    x,
    y,
    onMove,
    handleActiveNode,
    isActiveNode,
    title = "Debug Log",
    text = "Sequence Output",
  } = props;

  const handleMouseDown = (e) => {
    const initialMouseX = e.clientX;
    const initialMouseY = e.clientY;

    const handleMouseMove = (e) => {
      console.log("x", x);
      console.log("y", y);
      console.log("e.clientX", e.clientX);
      console.log("e.clientY", e.clientY);
      // calculate new node position
      const newX = x + e.clientX - initialMouseX;
      const newY = y + e.clientY - initialMouseY;

      onMove({ x: newX, y: newY });
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
      style={{
        position: "absolute",
        top: y,
        left: x,
        border: isActiveNode() ? "1px solid white" : "2px solid #0891b2",
      }}
      onMouseDown={handleMouseDown}
      onClick={() => handleActiveNode(id)}
      className={styles["node"]}
    >
      <p className={styles["title"]}>{title}</p>
      <div className={styles["input_text_container"]}>
        <p className={styles["text"]}>Text:</p>
        <input className={styles["input_text"]} type="text" value={text} />
      </div>
    </div>
  );
};

export default Node;
