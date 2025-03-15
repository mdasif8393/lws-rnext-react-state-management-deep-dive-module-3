import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Learn with sumit</h2>
      <Panel
        title="Paid Course"
        onActive={() => setActiveIndex(0)}
        isActive={activeIndex === 0 && true}
      >
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        nostrum harum id nisi ipsum vitae aspernatur fuga provident tenetur
        aliquam?{" "}
      </Panel>
      <Panel
        title="Free Course"
        onActive={() => setActiveIndex(1)}
        isActive={activeIndex === 1 && true}
      >
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        error ullam tempora ad quidem sit eos officia porro laudantium
        aspernatur?{" "}
      </Panel>
    </>
  );
}
