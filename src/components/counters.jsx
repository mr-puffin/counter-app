import React from "react";
import Counter from "./counter";

const Counters = ({ counters, onDelete, onReset, onIncrement, onDecrement }) => {
  return (
    <div>
      <p>There are {counters.length} counters</p>
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
