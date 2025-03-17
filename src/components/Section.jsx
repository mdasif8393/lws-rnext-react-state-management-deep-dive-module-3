import { LevelContext } from "../context/LevelContext";

export default function Section({ children, level }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
