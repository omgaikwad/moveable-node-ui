import React, { useState } from "react";
import styles from "./NodeContainer.module.css";
import Node from "../../components/Node/Node";

const NodeContainer = () => {
  const [nodes, setNodes] = useState([{ id: 1, x: "50", y: "50" }]);

  const handleNodeMove = (id, newPosition) => {
    setNodes((prevNodes) => {
      prevNodes.map((node) =>
        node.id === id ? { ...node, ...newPosition } : node
      );
    });
  };

  const handleAddNode = () => {
    setNodes((prevNodes) => [
      ...prevNodes,
      { id: prevNodes.length + 1, x: 50, y: 50 },
    ]);
  };

  return <div className={styles["node_container"]}></div>;
};

export default NodeContainer;
