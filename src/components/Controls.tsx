import { useState } from "react";
    // 👈 import CSS file

const Controls = ({ onBook, onRandom, onReset }: any) => {
  const [count, setCount] = useState(1);

  return (
    <div className="controls">
      <label>
        Rooms:
        <input
          type="number"
          min={1}
          max={5}
          value={count}
          onChange={(e) => setCount(+e.target.value)}
          className="room-input"
        />
      </label>

      <button className="btn book" onClick={() => onBook(count)}>
        Book
      </button>

      <button className="btn random" onClick={onRandom}>
        Random
      </button>

      <button className="btn reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default Controls;
