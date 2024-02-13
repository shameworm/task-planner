import { list } from "postcss";
import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/4 px-9 py-16 bg-slate-900 text-slate-50 md:w-72 rounded-r-3xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-slate-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
