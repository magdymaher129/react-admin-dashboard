import React, { useState } from "react";

export default function Hook() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => {setcount(count + 1); }}> increament</button>
      <button onClick={() => {setcount(count - 1);}}  >Decreament </button>
    </div>
  );
}
