import React from "react";

const Popup = (props) => {
  return (
    <div
      className="modal"
      //   style={{ display: props.status.seen == true ? "block" : "none" }}
    >
      <div className="modal_content">
        <p>{props.status.message || ""}</p>
      </div>
    </div>
  );
};

export default Popup;
