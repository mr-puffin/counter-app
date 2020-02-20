import React from "react";

// Controlled component
const Counter = ({ counter, onDelete, onIncrement, onDecrement }) => {
  return (
    <div className="row justify-content-start">
      <div className="col-2">
        <span className={getBadgeClasses(counter.value)}>
          {formatCount(counter.value)}
        </span>
      </div>
      <div className="col">
        <button
          onClick={() => {
            onIncrement(counter);
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>

        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => onDecrement(counter)}
          disabled={counter.value === 0}
        >
          -
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(counter)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Counter;

function formatCount(count) {
  return count === 0 ? "Zero" : count;
}
function getBadgeClasses(value) {
  let classes = "badge m-2 badge-";
  classes += value === 0 ? "warning" : "primary";
  return classes;
}
