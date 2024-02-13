import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewFunction({ onAdd, onCancel }) {
  const modal = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function saveHandler() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Ok">
        <h2 className="text-xl font-bold text-slate-700 my-4">Invalid input</h2>
        <p className="text-slate-600 mb-4">
          Please make sure input field is not empty.
        </p>
      </Modal>
      <div className="w-96 mt-16">
        <menu className="flex items-center justify-end gap-4 my-6">
          <li>
            <button className="text-slate-800 hover:text-slate-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-lg bg-slate-800 hover:bg-slate-950 text-slate-100"
              onClick={saveHandler}
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input ref={titleRef} label={"Title"} type="text" />
          <Input ref={descriptionRef} label={"Description"} isTextarea />
          <Input ref={dueDateRef} label={"Due Date"} type="date" />
        </div>
      </div>
    </>
  );
}
