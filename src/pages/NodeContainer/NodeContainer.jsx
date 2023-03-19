import React, { useState } from "react";
import styles from "./NodeContainer.module.css";
import Node from "../../components/Node/Node";
import { generateUniqueId } from "../../utils/general-utils";

const NodeContainer = () => {
  const [nodes, setNodes] = useState([
    { id: generateUniqueId(), x: 50, y: 50 },
  ]);
  const [activeNode, setActiveNode] = useState(null);

  const handleActiveNode = (id) => {
    setActiveNode(id);
  };

  const isActiveNode = (id) => {
    return activeNode === id;
  };

  const handleNodeMove = (id, newPosition) => {
    setNodes((prevNodes) => {
      return prevNodes.map((node) =>
        node.id === id ? { ...node, ...newPosition } : node
      );
    });
  };

  const handleAddNode = () => {
    setNodes((prevNodes) => [
      ...prevNodes,
      { id: generateUniqueId(), x: 0, y: 0 },
    ]);
  };

  const handleDeleteNode = (id) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };

  return (
    <div className={styles["node_container"]}>
      {nodes.map((node) => {
        return (
          <Node
            key={node.id}
            id={node.id}
            x={node.x}
            y={node.y}
            onMove={(newPosition) => handleNodeMove(node.id, newPosition)}
            handleActiveNode={() => handleActiveNode(node.id)}
            isActiveNode={() => isActiveNode(node.id)}
          />
        );
      })}

      <button className={styles["add_node_btn"]} onClick={handleAddNode}>
        Add Node
      </button>

      {activeNode !== null && (
        <button
          className={styles["delete_node_btn"]}
          onClick={() => handleDeleteNode(activeNode)}
        >
          <img src="/assets/icons/delete.png" alt="delete-icon" />
        </button>
      )}
    </div>
  );
};

export default NodeContainer;
