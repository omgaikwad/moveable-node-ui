import React from "react";
import styles from "./InfoModal.module.css";

const InfoModal = ({ closeInfoModal }) => {
  return (
    <div className={styles["info_modal_background"]}>
      <div className={styles["info_modal_container"]}>
        <h1 className={styles["heading"]}>Help</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          className={styles["info_container"]}
        >
          <p>
            New Nodes can be created clicking `+` icon present on the top right
            corner of the screen.
          </p>
          <p>Nodes can be dragged and dropped to any position on the screen.</p>
          <p>
            Nodes can be deleted by selecting the node and clicking `Delete`
            icon.
          </p>
          <p>
            Nodes can be connected by selecting first node using on click on
            forward circle and then selecting second node using on click on
            backward circle.
          </p>
          <p> Text can be added to the node using text input box.</p>
          <p> Node Graph can be downloaded and saved using `Download` icon.</p>
        </div>

        <button
          onClick={() => closeInfoModal()}
          className={styles["close_modal_btn"]}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default InfoModal;
