import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

import Button from "../custom-components/Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      }
    };
  });

  function submitHandler(e) {
    e.preventDefault();
    dialog.current.close();
  }

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-slate-900/90 p-4 rounded shadow-lg">
      {children}
      <form onSubmit={submitHandler} className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
