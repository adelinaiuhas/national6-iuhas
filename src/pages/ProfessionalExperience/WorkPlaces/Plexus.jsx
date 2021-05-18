import "./Plexus.css";
export function Plexus() {
  return (
    <div className="plexus">
      <h2> Main tasks</h2>
      <ul>
        <li>
          Review all customer demands prior to entry into ERP system, loading
          forecast based on capacity.{" "}
        </li>
        <li>Processing customer purchasing orders.</li>
        <li>
          Maintain the work order schedule and release work orders based on
          materials and capacity availability.
        </li>
        <li> Organizing deliveries.</li>
      </ul>

      <h2>Accomplishments:</h2>
      <ul>
        <li>
          {" "}
          Implementing the proposal made to the customer of simplifying the
          order management.{" "}
        </li>
        <li>
          {" "}
          Improving the process of forecast analysis in order to have more
          conclusive data and the time needed to be reduced in half.
        </li>
        <li>
          Elaborating the capacity analysis based on customer forecast with the
          emphasis on the moment of absorbing the forecast increase in the basis
          of acquiring a new production line.
        </li>
        <li>
          {" "}
          Proposing and modifying the system setup in order to reduce the time
          of verifying the data introduced when loading a new forecast.{" "}
        </li>
      </ul>
      <h2>Location</h2>
      <p>Oradea, Romania</p>
      <br />
    </div>
  );
}
