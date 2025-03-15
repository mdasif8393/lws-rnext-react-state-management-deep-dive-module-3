export default function Panel({ title, children, isActive, onActive }) {
  return (
    <section
      className="panel"
      style={{ border: "1px solid black", margin: "2px", padding: "5px" }}
    >
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onActive}>Show</button>}
    </section>
  );
}
