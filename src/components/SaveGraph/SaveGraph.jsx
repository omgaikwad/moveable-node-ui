import React from "react";
import styles from "./SaveGraph.module.css";

const SaveGraph = ({ closeSaveGraphModal, nodes }) => {
  return (
    <div className={styles["info_modal_background"]}>
      <div className={styles["info_modal_container"]}>
        <button
          onClick={() => closeSaveGraphModal()}
          className={styles["close_modal_btn"]}
        >
          <img src="/assets/icons/cancel.png" alt="cancel-icon" />
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {nodes.map((node) => {
            return <div>{JSON.stringify(node, null, 2)}</div>;
          })}
        </div>

        <button
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(nodes));
          }}
          className={styles["copy_graph_btn"]}
        >
          Copy Graph
        </button>
      </div>
    </div>
  );
};

export default SaveGraph;
