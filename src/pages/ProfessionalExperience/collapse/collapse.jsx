import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";

function CollapsiblePanel({ children, ...props }) {
  const { title, collapse } = props;
  const [isCollapse, setIsCollapse] = useState(collapse);
  const [icon, setIcon] = useState("fa fa-chevron-down");
  const toggle = () => {
    setIsCollapse(!isCollapse);
    setIcon((state) => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  return (
    <div className="coll-panel own">
      <button
        type="button"
        className="coll-panel-btn btn-primary btn-block text-left"
        onClick={() => toggle()}
      >
        {/* <i className={icon} /> {title} */}
        <h2 className={icon}>{title}</h2>
      </button>
      <Collapse className="border text-left p-2" isOpen={isCollapse}>
        {children}
      </Collapse>
    </div>
  );
}

export default CollapsiblePanel;
