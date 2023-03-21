import React from "react";
import styles from "./Node.module.css";

const Node = (props) => {
  const {
    node,
    onMove,
    handleActiveNode,
    handleActiveFlowNode,
    isActiveNode,
    handleChangeText,
    handleBackwardFlow,
    isBackwardFlowConnected,
    title = "Debug Log",
  } = props;

  const { id, x, y, text, flowNodeId } = node;

  const handleMouseDown = (e) => {
    const initialMouseX = e.clientX;
    const initialMouseY = e.clientY;

    const handleMouseMove = (e) => {
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
      <div
        onClick={() => handleActiveFlowNode(id)}
        style={{ backgroundColor: flowNodeId !== "" ? "#ffffff" : "#1e1f22" }}
        className={styles["connecting_circle_forward"]}
      ></div>

      <p className={styles["title"]}>{title}</p>
      <div className={styles["input_text_container"]}>
        <p className={styles["text"]}>Text:</p>
        <input
          onChange={(e) => handleChangeText(e.target.value)}
          className={styles["input_text"]}
          type="text"
          value={text}
        />
      </div>

      <div
        style={{
          backgroundColor: isBackwardFlowConnected(id) ? "#ffffff" : "#1e1f22",
        }}
        onClick={(e) => handleBackwardFlow(e, id)}
        className={styles["connecting_circle_backward"]}
      >
        {" "}
      </div>
    </div>
  );
};

export default Node;
