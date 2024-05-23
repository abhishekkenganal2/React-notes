import { useState } from "react";

export default function NewTasks({onAdd}) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {

    if(enteredTask.trim() === '') {
        return;
    }
    onAdd(enteredTask)
    setEnteredTask('');
  }

  return (
    <div className="flex item-center gap-4">
      <input
        type="text"
        className="w-64 px-2 px-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button className="text-stone-500 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
  );
}
