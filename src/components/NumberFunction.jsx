import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, subNumber } from "../store/slice/NumberSlice";
import "../App.css";

function NumberFunction() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.number.value;
  });
  //   console.log(data);

  return (
    <div className="number">
      <div className="display">
        <h1>{data}</h1>
      </div>
      <div className="calculate">
        <button className="btn" onClick={() => dispatch(addNumber(1))}>
          INCREMENT BY 1
        </button>
        <button className="btn" onClick={() => dispatch(subNumber(1))}>
          DECREMENT BY 1
        </button>
        <button className="btn" onClick={() => dispatch(addNumber(10))}>
          INCREMENT BY 10
        </button>
        <button className="btn" onClick={() => dispatch(subNumber(10))}>
          DECREMENT BY 10
        </button>
        <button className="btn" onClick={() => dispatch(addNumber(100))}>
          INCREMENT BY 100
        </button>
        <button className="btn" onClick={() => dispatch(subNumber(100))}>
          DECREMENT BY 100
        </button>
      </div>
    </div>
  );
}

export default NumberFunction;
