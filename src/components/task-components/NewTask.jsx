import { useState, useRef } from "react";

import Modal from "../modals/Modal";

export default function NewTask({ onAdd }) {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  function changeHandler(event) {
    setEnteredTask(event.target.value);
  }

  function clickHandler() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Ok">
        <h2 className="text-xl font-bold text-slate-700 my-4">Invalid input</h2>
        <p className="text-slate-600 mb-4">
          Please make sure input field is not empty.
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded bg-slate-200"
          onChange={changeHandler}
          value={enteredTask}
        />
        <button
          onClick={clickHandler}
          className="text-slate-700 hover:text-slate-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
