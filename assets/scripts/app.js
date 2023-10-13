class DOMManipulator {
    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }

    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destElement = document.querySelector(newDestinationSelector);
        destElement.append(element);
    }
}

class Component {
    constructor(hostElementId, insertBefore = false) {
        if (hostElementId) {
            this.hostElement = document.getElementById(hostElementId);
        } else {
            this.hostElement = document.body;
        }
        this.insertBefore = insertBefore;
    }

    detach() {
        return this.element ? this.element.remove() : null;
    }

    attach() {
        this.hostElement.insertAdjacentElement(
            this.insertBefore ? "afterbegin" : "beforeend",
            this.element
        );
    }
}

class Tooltip extends Component {
    constructor(closeNotifierFunction) {
        super("active-projects", true);
        this.closeNotifier = closeNotifierFunction;
        this.create();
    }

    closeTooltip() {
        this.detach();
        this.closeNotifier();
    }

    create() {
        const tooltipElement = document.createElement("div");
        tooltipElement.className = "card";
        tooltipElement.textContent = "Dummy";
        tooltipElement.addEventListener("click", this.closeTooltip.bind(this));
        this.element = tooltipElement;
    }
}

class ProjectItem {
    hasActiveTooltip = false;

    constructor(id, updateProjectListsFunction, type) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }

    showMoreInfoHandler() {
        if (this.hasActiveTooltip) {
            return;
        }

        const tooltip = new Tooltip(() => (this.hasActiveTooltip = false));
        tooltip.attach();
        this.hasActiveTooltip = true;
    }

    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoButton = projectItemElement.querySelector(
            "button:first-of-type"
        );
        moreInfoButton.addEventListener("click", this.showMoreInfoHandler);
    }

    connectSwitchButton(type) {
        const projectItemElement = document.getElementById(this.id);
        let switchButton = projectItemElement.querySelector(
            "button:last-of-type"
        );
        switchButton = DOMManipulator.clearEventListeners(switchButton);
        switchButton.textContent = type === "active" ? "Finish" : "Activate";
        switchButton.addEventListener(
            "click",
            this.updateProjectListsHandler.bind(null, this.id)
        );
    }

    update(updateProjectListsFunction, type) {
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectSwitchButton(type);
    }
}

class ProjectList {
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
        console.log(this.projects);
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
