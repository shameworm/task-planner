import { ProjectList } from "./app/ProjectList.js";

class App {
    static init() {
        const activeProjectsList = new ProjectList("active");
        const finishedProjectsList = new ProjectList("finished");

        activeProjectsList.setSwitchHandlerFunction(
            finishedProjectsList.addProject.bind(finishedProjectsList)
        );

        finishedProjectsList.setSwitchHandlerFunction(
            activeProjectsList.addProject.bind(activeProjectsList)
        );
    }
}

App.init();
