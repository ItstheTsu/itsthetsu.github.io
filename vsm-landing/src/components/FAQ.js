const React = window.React;
import { faqs } from '../data/content.js';
import Icon from './Icon.js';
export default class FAQ extends React.Component {
    state = { openIndex: 0 };
    render() {
        return React.createElement("section", { className: "faq section", id: "faq", "aria-labelledby": "faq-title" },
            React.createElement("div", { className: "container faq__layout" },
                React.createElement("div", { className: "faq__intro reveal" },
                    React.createElement("p", { className: "eyebrow eyebrow--blue" },
                        React.createElement("span", { className: "eyebrow__square" }),
                        " TIRE SUAS D\u00DAVIDAS"),
                    React.createElement("h2", { className: "section-heading", id: "faq-title" },
                        "Perguntas",
                        React.createElement("br", null),
                        React.createElement("em", null, "frequentes.")),
                    React.createElement("p", null, "O essencial para entender como a tecnologia VSM pode fazer parte do seu neg\u00F3cio."),
                    React.createElement("a", { href: "https://www.vsm.com.br/perguntas-frequentes/", className: "text-link", target: "_blank", rel: "noopener noreferrer" },
                        "Mais perguntas no site oficial ",
                        React.createElement(Icon, { name: "arrow-up-right", size: 18 }))),
                React.createElement("div", { className: "faq__items reveal" }, faqs.map((faq, i) => { const open = this.state.openIndex === i; return React.createElement("div", { className: `faq-item ${open ? 'faq-item--open' : ''}`, key: faq.question },
                    React.createElement("h3", null,
                        React.createElement("button", { type: "button", id: `faq-button-${i}`, "aria-expanded": open, "aria-controls": `faq-answer-${i}`, onClick: () => this.setState({ openIndex: open ? null : i }) },
                            React.createElement("span", null, faq.question),
                            React.createElement("span", { className: "faq-item__icon" },
                                React.createElement(Icon, { name: open ? 'minus' : 'plus', size: 19 })))),
                    React.createElement("div", { className: "faq-item__answer", id: `faq-answer-${i}`, role: "region", "aria-labelledby": `faq-button-${i}`, hidden: !open },
                        React.createElement("p", null, faq.answer))); }))));
    }
}
