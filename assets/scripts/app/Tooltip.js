import {Component} from "./Component.js";

export class Tooltip extends Component {
    constructor(closeNotifierFunction, text, hostElementId) {
        super(hostElementId);
        this.closeNotifier = closeNotifierFunction;
        this.text = text;
        this.create();
    }

    closeTooltip() {
        this.detach();
        this.closeNotifier();
    }

    create() {
        const tooltipElement = document.createElement("div");
        tooltipElement.className = "card";
        const tooltipTemplate = document.getElementById("tooltip");
        const tooltipBody = document.importNode(tooltipTemplate.content, true);
        tooltipBody.querySelector("p").textContent = this.text;

        tooltipElement.append(tooltipBody);

        const x = this.hostElement.offsetLeft + 20;
        const y =
            this.hostElement.offsetTop +
            this.hostElement.clientHeight -
            this.hostElement.parentElement.scrollTop -
            10;

        tooltipElement.style.left = x + "px";
        tooltipElement.style.top = y + "px";

        tooltipElement.style.position = "absolute";
        tooltipElement.addEventListener("click", this.closeTooltip.bind(this));
        this.element = tooltipElement;
    }
}
