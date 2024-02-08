import Input from "./Input";

export default function NewFunction() {
  return (
    <div className="w-96 mt-16">
      <menu className="flex items-center justify-end gap-4 my-6">
        <li>
          <button className="text-slate-800 hover:text-slate-950">Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-lg bg-slate-800 hover:bg-slate-950 text-slate-100">Save</button>
        </li>
      </menu>

      <div>
        <Input label={"Title"} />
        <Input label={"Description"} isTextarea />
        <Input label={"Due Date"}/>
      </div>
    </div>
  );
}
