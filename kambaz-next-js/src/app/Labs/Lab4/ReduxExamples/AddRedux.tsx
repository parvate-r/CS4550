"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addAmount } from "../store/counterReducer";

export default function AddRedux() {
  const [amount, setAmount] = useState(1);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!isNaN(amount)) {
      dispatch(addAmount(amount));
    }
  };

  return (
    <div className="mb-4">
      <h4>Add Custom Amount (Redux)</h4>
      <p>Count: {count}</p>
      <input
        type="number"
        className="form-control mb-2"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
      />
      <button className="btn btn-success" onClick={handleAdd}>
        Add Amount
      </button>
    </div>
  );
}
