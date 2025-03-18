import { useState } from "react";
import { useTasks, useTasksDispatch } from "../context/TaskContext";
import { getNextId } from "../utils/getNextId";

export default function AddTask() {
  const dispatch = useTasksDispatch();
  const tasks = useTasks();

  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            text,
            id: getNextId(tasks),
          });
        }}
      >
        Add
      </button>
    </>
  );
}
