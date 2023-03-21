import React, { useEffect } from "react";
import styles from "./SaveGraph.module.css";

const SaveGraph = ({ closeSaveGraphModal, nodes }) => {
  const [copyButtonName, setCopyButtonName] = React.useState("Copy Graph");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopyButtonName("Copy Graph");
    }, 3000);
    return () => clearTimeout(timer);
  }, [copyButtonName]);

  return (
    <div className={styles["info_modal_background"]}>
      <div className={styles["info_modal_container"]}>
        <h1 className={styles["heading"]}>Save Graph</h1>

        <pre className={styles["json_container"]}>
          {JSON.stringify(nodes, null, 2)}
        </pre>

        <div className={styles["action_btn_container"]}>
          <button
            onClick={() => closeSaveGraphModal()}
            className={styles["close_modal_btn"]}
          >
            Close
          </button>

          <button
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(nodes));
              setCopyButtonName("Copied!");
            }}
            className={styles["copy_graph_btn"]}
          >
            {copyButtonName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveGraph;
