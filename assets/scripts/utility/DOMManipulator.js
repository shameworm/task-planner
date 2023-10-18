export class DOMManipulator {
    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }

    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destElement = document.querySelector(newDestinationSelector);
        destElement.append(element);
        element.scrollIntoView({ behavior: "smooth" });
    }
}