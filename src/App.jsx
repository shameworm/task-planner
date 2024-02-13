import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function startAddProjectHandler() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function cancelAddProjectHandler() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function addProjectHandler(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: parseInt(Date.now() * Math.random()),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectsState);

  return (
    <>
      <header className="w-full border-b-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 border-b-transparent">
        <h1 className="py-4 text-center text-5xl font-bold text-slate-200">
          Task Planner & Project Management
        </h1>
      </header>

      <main className="h-screen pt-1.5 flex gap-10">
        <ProjectsSidebar onStartAddProject={startAddProjectHandler} projects={projectsState.projects}/>
        {projectsState.selectedProjectId === null ? (
          <NewProject onAdd={addProjectHandler} onCancel={cancelAddProjectHandler}/>
        ) : projectsState.selectedProjectId === undefined ? (
          <NoProjectSelected onStartAddProject={startAddProjectHandler} />
        ) : null}
      </main>
    </>
  );
}

export default App;
