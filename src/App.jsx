import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

// Temp project item
const tempProject = {
  id: 0,
  title: "Learn React",
  description: "ASDASDASD vfdsfasd adf asfdsa",
  dueDate: "12.11.2022",
};

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [{ ...tempProject }],
    tasks: [],
  });

  function addTaskHandler(text) {
    setProjectsState((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: parseInt(Date.now() * Math.random()),
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function deleteTaskHandler(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

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

  function selectProjectHandler(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function deleteProjectHandler() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  return (
    <>
      <header className="w-full border-b-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 border-b-transparent">
        <h1 className="py-4 text-center text-5xl font-bold text-slate-200">
          Task Planner & Project Management
        </h1>
      </header>

      <main className="h-screen pt-1.5 flex gap-10">
        <ProjectsSidebar
          onStartAddProject={startAddProjectHandler}
          projects={projectsState.projects}
          onSelectProject={selectProjectHandler}
          selectedProjectId={projectsState.selectedProjectId}
        />
        {projectsState.selectedProjectId === null ? (
          <NewProject
            onAdd={addProjectHandler}
            onCancel={cancelAddProjectHandler}
          />
        ) : projectsState.selectedProjectId === undefined ? (
          <NoProjectSelected onStartAddProject={startAddProjectHandler} />
        ) : (
          <SelectedProject
            project={selectedProject}
            onAddTask={addTaskHandler}
            onDeleteTask={deleteTaskHandler}
            onDelete={deleteProjectHandler}
            tasks={projectsState.tasks}
          />
        )}
      </main>
    </>
  );
}

export default App;
