import Button from "./custom-components/Button";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/4 px-9 py-16 bg-slate-900 text-slate-50 md:w-72 rounded-r-3xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-slate-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-slate-200 hover:bg-slate-800";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-slate-800 text-slate-200 rounded-md";
          } else {
            cssClasses += " text-slate-400";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
