const React = window.React;
import Icon from './Icon.js';
export default function CTA() {
    return React.createElement("section", { className: "cta-section", id: "contato", "aria-labelledby": "cta-title" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "cta-block reveal" },
                React.createElement("div", { className: "cta-block__mesh", "aria-hidden": "true" }),
                React.createElement("div", { className: "cta-block__orb", "aria-hidden": "true" }),
                React.createElement("div", { className: "cta-block__content" },
                    React.createElement("span", { className: "eyebrow eyebrow--cta" },
                        React.createElement("span", { className: "eyebrow__line" }),
                        " O PR\u00D3XIMO PASSO COME\u00C7A AQUI"),
                    React.createElement("h2", { id: "cta-title" },
                        "O futuro da sua gest\u00E3o ",
                        React.createElement("em", null, "come\u00E7a com uma conex\u00E3o.")),
                    React.createElement("p", null, "Conhe\u00E7a as solu\u00E7\u00F5es da VSM e descubra como um ecossistema integrado pode ajudar sua opera\u00E7\u00E3o."),
                    React.createElement("a", { href: "https://www.vsm.com.br/", className: "btn btn--white", target: "_blank", rel: "noopener noreferrer" },
                        "Visitar o site oficial ",
                        React.createElement(Icon, { name: "arrow-up-right", size: 19 }))),
                React.createElement("div", { className: "cta-block__symbol", "aria-hidden": "true" },
                    React.createElement("span", null, "V"),
                    React.createElement("i", null)))));
}
