"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { increment, decrement, reset } from "../store/counterReducer";

export default function CounterRedux() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="mb-4">
      <h4>Redux Counter Example</h4>
      <p>Count: {count}</p>
      <button className="btn btn-primary me-2" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="btn btn-secondary me-2" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button className="btn btn-danger" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}
