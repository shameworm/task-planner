import noProjectImage from "../assets/no-projects.png";

import Button from "./Button";

export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProjectImage} alt="A notebook our main picture(and only one)" className="w-16 h-16 object-contain mx-auto"/>
      <h2 className="text-xl font-bold text-slate-500 my-4">No project Selected!</h2>
      <p className="text-slate-400 mb-4">Select a project or get started with a new onew </p>
      <p className="mt-6">
        <Button>
          Create new project
        </Button>
      </p>
    </div>
  );
}
