import React, { useState } from "react";
import styles from "./NodeContainer.module.css";
import Node from "../../components/Node/Node";
import { generateUniqueId } from "../../utils/general-utils";

const NodeContainer = () => {
  const [nodes, setNodes] = useState([
    {
      id: generateUniqueId(),
      x: 50,
      y: 50,
      text: "This is text",
      flowNodeId: "",
    },
  ]);
  const [activeNode, setActiveNode] = useState(null);
  const [activeFlowNode, setActiveFlowNode] = useState(null);

  const handleActiveNode = (id) => {
    setActiveNode(id);
  };

  const handleActiveFlowNode = (id) => {
    console.log("active flow node");
    setActiveFlowNode(id);
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

  const handleBackwardFlow = (e, nodeId) => {
    console.log("handle backward flow");
    console.log(activeFlowNode);
    e.stopPropagation();
    if (nodeId !== activeFlowNode) {
      setNodes((prevNodes) => {
        return prevNodes.map((node) =>
          node.id === activeFlowNode ? { ...node, flowNodeId: nodeId } : node
        );
      });
    } else {
      console.log("wrong flow");
    }
  };
  const handleAddNode = () => {
    setNodes((prevNodes) => [
      ...prevNodes,
      { id: generateUniqueId(), x: 0, y: 0, text: "", flowNodeId: "" },
    ]);
  };

  const handleChangeText = (id, text) => {
    setNodes((prevNodes) => {
      return prevNodes.map((node) =>
        node.id === id ? { ...node, text: text } : node
      );
    });
  };

  const handleDeleteNode = (id) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };

  const getNode = (id) => {
    const node = [...nodes].find((node) => node.id === id);
    return node;
  };

  const isBackwardFlowConnected = (id) => {
    const findObj = [...nodes].find((node) => node.flowNodeId === id);

    return findObj !== undefined ? true : false;
  };

  const flowNodesArray = nodes.filter((node) => node.flowNodeId !== "");

  console.log(flowNodesArray);

  return (
    <div className={styles["node_container"]}>
      {/* <div className={styles["svg_path_container"]}> */}
      <svg className={styles["path_line"]} width="100vw" height="100vh">
        {flowNodesArray.map((node) => {
          const flowNode = getNode(node.flowNodeId);
          return (
            <g>
              <path
                d={`M ${node.x + 190} ${node.y + 48} L ${flowNode.x} ${
                  flowNode.y + 48
                } z`}
                stroke="grey"
                strokeWidth="2"
                fill="none"
              >
                {" "}
              </path>
            </g>
          );
        })}
      </svg>
      {/* </div> */}
      {nodes.map((node) => {
        return (
          <Node
            node={node}
            onMove={(newPosition) => handleNodeMove(node.id, newPosition)}
            handleActiveNode={() => handleActiveNode(node.id)}
            handleActiveFlowNode={() => handleActiveFlowNode(node.id)}
            handleChangeText={(text) => handleChangeText(node.id, text)}
            isActiveNode={() => isActiveNode(node.id)}
            handleBackwardFlow={(e) => handleBackwardFlow(e, node.id)}
            isBackwardFlowConnected={(e) => isBackwardFlowConnected(e, node.id)}
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
