"use client";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import IntegerState from "./UseState/IntegerState";
import BooleanState from "./UseState/BooleanState";
import StringState from "./UseState/StringState";
import DateState from "./UseState/DateState";
import ObjectState from "./UseState/ObjectState";
import ArrayState from "./UseState/ArrayState";
import SharedState from "./UseState/SharedState";
import FormInputExample from "./FormInputExample";
import ReduxExamples from "./ReduxExamples";

export default function Lab4() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <Provider store={store}>
      <div id="wd-lab4" className="container mt-4 mb-5">
        <h2 className="mb-3">Lab 4 – Maintaining State in React Applications</h2>
        <p>
          This lab demonstrates how to handle events, manage component state using{" "}
          <code>useState</code>, and manage global state using <code>Redux Toolkit</code>.
        </p>

        {/* 4.2.1 Handling Events */}
        <section className="mb-4">
          <h3>4.2.1 – Handling User Events</h3>

          {/* 4.2.1.1 Handling Click Events */}
          <div className="mb-3">
            <h5>4.2.1.1 Handling Click Events</h5>
            <button onClick={handleClick} className="btn btn-outline-primary">
              Click Me
            </button>
          </div>

          {/* 4.2.1.2 Passing Data When Handling Events */}
          <div className="mb-3">
            <h5>4.2.1.2 Passing Data When Handling Events</h5>
            <button
              onClick={() => alert(`Hello, ${"Alice"}!`)}
              className="btn btn-outline-secondary"
            >
              Greet Alice
            </button>
          </div>

          {/* 4.2.1.3 Passing Functions as Parameters + 4.2.1.4 The Event Object */}
          <div>
            <h5>4.2.1.3 + 4.2.1.4 – Counter Example with Event Object</h5>
            <p>Count: {count}</p>
            <button onClick={handleIncrement} className="btn btn-primary me-2">
              Increment
            </button>
            <button onClick={handleDecrement} className="btn btn-secondary me-2">
              Decrement
            </button>
            <button onClick={handleReset} className="btn btn-danger">
              Reset
            </button>
          </div>
        </section>

        {/* 4.2.2 Managing Component State */}
        <section className="mb-4">
          <h3>4.2.2 – Managing Component State</h3>
          <IntegerState />
          <BooleanState />
          <StringState />
          <DateState />
          <ObjectState />
          <ArrayState />
          <SharedState />
          <FormInputExample />
        </section>

        {/* 4.3 Managing Application State with Redux */}
        <section className="mb-4">
          <h3>4.3 – Managing Application State with Redux</h3>
          <ReduxExamples />
        </section>
      </div>
    </Provider>
  );
}
