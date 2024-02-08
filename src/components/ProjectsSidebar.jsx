import Button from "./Button";

export default function ProjectsSidebar() {
  return (
    <aside className="w-1/4 px-9 py-16 bg-slate-900 text-slate-50 md:w-72 rounded-r-3xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-slate-200">
        Your projects
      </h2>
      <div>
        <Button>
          + Add Project
        </Button>
      </div>
      <ul></ul>
    </aside>
  );
}
