import { ProjectItem } from "./ProjectItem.js";
import { DOMManipulator } from "../utility/DOMManipulator.js";

export class ProjectList {
    projects = [];

    constructor(type) {
        this.type = type;
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        for (const projectItem of projectItems) {
            this.projects.push(
                new ProjectItem(
                    projectItem.id,
                    this.switchProject.bind(this),
                    this.type
                )
            );
        }
        this.connectDroppable();
    }

    connectDroppable() {
        const list = document.querySelector(`#${this.type}-projects ul`);

        list.addEventListener("dragenter", (event) => {
            if (event.dataTransfer.types[0] === "text/plain") {
                list.parentElement.classList.add("droppable");
                event.preventDefault();
            }
        });

        list.addEventListener("dragover", (event) => {
            if (event.dataTransfer.types[0] === "text/plain") {
                event.preventDefault();
            }
        });

        list.addEventListener("dragleave", (event) => {
            if (
                event.relatedTarget.closest(`#${this.type}-projects ul`) !==
                list
            ) {
                list.parentElement.classList.remove("droppable");
            }
        });

        list.addEventListener("drop", (event) => {
            const projectId = event.dataTransfer.getData("text/plain");

            if (this.projects.find((p) => p.id === projectId)) {
                return;
            }

            document
                .getElementById(projectId)
                .querySelector("button:last-of-type")
                .click();
            list.parentElement.classList.remove("droppable");
            event.preventDefault();
        });
    }

    setSwitchHandlerFunction(setSwitchHandlerFunction) {
        this.switchHandler = setSwitchHandlerFunction;
    }

    addProject(project) {
        this.projects.push(project);
        DOMManipulator.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    }

    switchProject(projectId) {
        this.switchHandler(this.projects.find((p) => p.id === projectId));
        this.projects = this.projects.filter((p) => p.id !== projectId);
    }
}
