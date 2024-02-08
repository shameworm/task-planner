import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <>
      <header className="w-full border-b-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 border-b-transparent">
        <h1 className="py-4 text-center text-5xl font-bold text-slate-200">
          Task Planner & Project Management
        </h1>
      </header>

      <main className="h-screen my-1">
        <ProjectsSidebar />
      </main>
    </>
  );
}

export default App;
