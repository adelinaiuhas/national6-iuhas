import React, { useState } from "react";
import CollapsiblePanel from "./CollapsiblePanel/CollapsiblePanel";
import "./ProfessionalExperience.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export function ProfessionalExperience() {
  const [collapse, setCollapse] = useState(true);
  const [title, setTitle] = useState("Expand All");
  const [icon, setIcon] = useState("fa fa-chevron-right");
  const collapseAll = () => {
    setCollapse(!collapse);
    setIcon((state) => {
      return state === "fa fa-chevron-right"
        ? "fa fa-chevron-down"
        : "fa fa-chevron-right";
    });
    setTitle((state) => {
      return state === "Expand All" ? "Collapse All" : "Expand All";
    });
  };
  return (
    <div className="experience-container">
      {/* Collapse/Expand All */}
      <button
        id="my-style"
        type="button"
        className="btn-warning mt-4 mb-3 float-left"
        onClick={collapseAll}
      >
        <i className={icon} /> {title}
      </button>
      <CollapsiblePanel title="Plexus" collapse={collapse}>
        <h4>Period & Job title</h4>
        <p>01/Aug/2019 - Ongoing: Demand analyst SR </p>
        <p>04/Apr/2017 - 31/Jul/2019: Demand analyst II</p>
        <h4>Location</h4>
        <p>Oradea, Romania</p>
        <h4> Main tasks</h4>
        <p>
          Review all customer demands prior to entry into ERP system, loading
          forecast based on capacity.
        </p>
        <p>Processing customer purchasing orders.</p>
        <p>
          Maintain the work order schedule and release work orders based on
          materials and capacity availability.
        </p>
        <p> Organizing deliveries.</p>
        <h4>Accomplishments:</h4>
        <p>
          Implementing the proposal made to the customer of simplifying the
          order management.
        </p>
        <p>
          Improving the process of forecast analysis in order to have more
          conclusive data and the time needed to be reduced in half.
        </p>
        <p>
          Elaborating the capacity analysis based on customer forecast with the
          emphasis on the moment of absorbing the forecast increase in the basis
          of acquiring a new production line.
        </p>
        <p>
          Proposing and modifying the system setup in order to reduce the time
          of verifying the data introduced when loading a new forecast.{" "}
        </p>
      </CollapsiblePanel>
      <CollapsiblePanel title="Celestica IPC" collapse={collapse}>
        <h4>Period & Job title</h4>
        <p>28/Apr/2016 - 31/Mar/2017: Commodity management analyst</p>
        <p>07/Jan/2015 - 28/Apr/2016: Commodity management associate</p>
        <h4>Location</h4>
        <p>Oradea, Romania</p>
        <h4> Main tasks</h4>
        <p>Launching and monitoring orders. </p>
        <p>Effective collaboration with sites in Asia, America and Europe.</p>
        <p>Monitoring and verifying the records from the ERP system.</p>
        <p>
          Demand analysis, negotiating prices and other terms and conditions,
          rating brokers' offers.
        </p>
        <p>
          Finding opportunities for profit for Celestica sites from Europe by
          reducing acquisition price of materials or by finding potential
          customer for excess and obsolete materials.
        </p>
        <h4>Accomplishments:</h4>
        <p>
          Managing to successfully adapt to any new role required by management.
        </p>
        <p>
          The development of the business relationship between Celestica IPC and
          Celestica sites from Europe.
        </p>
      </CollapsiblePanel>
      <CollapsiblePanel title="Shinheung Electronics" collapse={collapse}>
        <h4>Period & Job title</h4>
        <p>09/Apr/2021 - 05/Jan/2015: Buyer</p>
        <h4>Location</h4>
        <p>Oradea, Romania</p>
        <h4> Main tasks</h4>
        <p>Identifying the necessary materials for production. </p>
        <p>Preparing and tracking purchase orders.</p>
        <p>Developing expenditure reports.</p>
        <h4>Accomplishments:</h4>
        <p> Elaborating the files for the analysis of material </p>
        <p> requirement based on customer forecast and the BOM of</p>
        <p>products, based on a model, however adapted to the </p>
        <p>particularities of the groups of materials purchased by me.</p>
      </CollapsiblePanel>
      <CollapsiblePanel title="Office Depot" collapse={collapse}>
        <h4>Period & Job title</h4>
        <p>06/Oct/2021 - 27/Jul/2012: Process assistant</p>
        <h4>Location</h4>
        <p>Cluj-Napoca, Romania</p>
        <h4> Main tasks</h4>
        <p>Customer service in financial matters on England's </p>
        <p>and Ireland's market.</p>
        <p>Maximizes cash flow by minimizing bad debt.</p>
        <p>Ensuring invoices are paid in full and in accordance</p>
        <p>with the agreed payment terms.</p>
      </CollapsiblePanel>
      <CollapsiblePanel title="King Dominion" collapse={collapse}>
        <h4>Period & Job title</h4>
        <p>28/Jun/2008 - 26/Sep/2008: Game Host</p>
        <h4>Location</h4>
        <p>Richmond, VR, US</p>
        <h4> Main tasks</h4>
        <p>Working in the game area.</p>
        <p>Serving and interacting with guests.</p>
      </CollapsiblePanel>
    </div>
  );
}
