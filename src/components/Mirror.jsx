import { useState } from "react";

export default function Mirror({ messageColor }) {
  const [color, setColor] = useState(messageColor);

  const handleChangeColor = () => {
    setColor("#1b1b1b");
  };
  return (
    <div>
      <h1 style={{ color }}>Hello World</h1>
      <br />
      <button onClick={handleChangeColor}>Change Color From Child</button>
    </div>
  );
}
