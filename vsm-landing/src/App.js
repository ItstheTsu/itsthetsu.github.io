const React = window.React;
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Solutions from './components/Solutions.js';
import Technology from './components/Technology.js';
import Benefits from './components/Benefits.js';
import CTA from './components/CTA.js';
import FAQ from './components/FAQ.js';
import Footer from './components/Footer.js';
export default function App() {
    return React.createElement("div", { className: "app-root" },
        React.createElement("a", { className: "skip-link", href: "#conteudo" }, "Pular para o conte\u00FAdo principal"),
        React.createElement(Header, null),
        React.createElement("main", { id: "conteudo" },
            React.createElement(Hero, null),
            React.createElement(About, null),
            React.createElement(Solutions, null),
            React.createElement(Technology, null),
            React.createElement(Benefits, null),
            React.createElement(CTA, null),
            React.createElement(FAQ, null)),
        React.createElement(Footer, null));
}
