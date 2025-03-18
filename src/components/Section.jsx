import { useContext } from "react";
import { LevelContext } from "../context/LevelContext.js";

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <section className={"section " + (isFancy ? "fancy" : "")}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
