import { forwardRef } from "react";

const Input = forwardRef(function Input({ isTextarea, label, ...props }, ref) {
  const classes =
    "w-full p-0.5 border-b-2 rounded-sm border-slate-300 bg-slate-200 text-slate-600 focus:outline-none focus:border-slate-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-slate-500">
        {label}
      </label>
      {isTextarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
