import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import "./Collapse.css";
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

  useEffect(() => {
    toggle();
    // eslint-disable-next-line
  }, [collapse]);

  return (
    <div className="coll-panel">
      <button
        id="adjusted-style"
        type="button"
        className="coll-panel-btn btn-primary btn-block text-left"
        onClick={() => toggle()}
      >
        <h4 className={icon}>{title}</h4>
      </button>
      <Collapse className="border text-left p-2" isOpen={isCollapse}>
        {children}
      </Collapse>
    </div>
  );
}
CollapsiblePanel.defaultProps = {
  children: "Add node as a child",
  title: "Collapsible Panel",
  collapse: true,
};
export default CollapsiblePanel;
