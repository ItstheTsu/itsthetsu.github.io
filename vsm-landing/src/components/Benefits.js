const React = window.React;
import { benefits } from '../data/content.js';
import Icon from './Icon.js';
export default function Benefits() {
    return React.createElement("section", { className: "benefits section", id: "diferenciais", "aria-labelledby": "benefits-title" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "benefits__intro reveal" },
                React.createElement("p", { className: "eyebrow eyebrow--blue" },
                    React.createElement("span", { className: "eyebrow__square" }),
                    " O QUE NOS MOVE"),
                React.createElement("h2", { className: "section-heading", id: "benefits-title" },
                    "Mais que software.",
                    React.createElement("br", null),
                    React.createElement("em", null, "Uma forma de evoluir.")),
                React.createElement("p", null, "N\u00E3o basta informatizar. O valor est\u00E1 em fazer cada parte do neg\u00F3cio trabalhar melhor com as outras.")),
            React.createElement("div", { className: "benefits__list" }, benefits.map(benefit => React.createElement("article", { className: "benefit reveal", key: benefit.number },
                React.createElement("span", { className: "benefit__number" }, benefit.number),
                React.createElement("div", { className: "benefit__icon" },
                    React.createElement(Icon, { name: benefit.icon, size: 23 })),
                React.createElement("div", { className: "benefit__content" },
                    React.createElement("h3", null, benefit.heading),
                    React.createElement("p", null, benefit.description)),
                React.createElement(Icon, { className: "benefit__arrow", name: "arrow-up-right", size: 23 }))))));
}
