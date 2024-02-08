export default function ProjectsSidebar() {
  return (
    <aside className="w-1/4 px-9 py-16 bg-slate-900 text-slate-50 md:w-72 rounded-r-3xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-slate-200">Your projects</h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-stone-100">+ Add Project</button>
      </div>
      <ul></ul>
    </aside>
  );
}
