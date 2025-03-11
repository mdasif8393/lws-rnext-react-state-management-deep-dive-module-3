import { useState } from "react";
import Form from "./components/Form";
import Mirror from "./components/Mirror";

export default function App() {
  const [color, setColor] = useState("red");

  const handleChangeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <Mirror messageColor={color} />
      <br />
      <button onClick={handleChangeColor}>Change Color From Parent</button>
    </div>
  );
}
