const React = window.React;
import Brand from './Brand.js';
import Icon from './Icon.js';
const links = [
    { href: '#sobre', label: 'A VSM' },
    { href: '#solucoes', label: 'Soluções' },
    { href: '#tecnologia', label: 'Tecnologia' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#faq', label: 'FAQ' }
];
export default class Header extends React.Component {
    state = { expanded: false, scrolled: false };
    onScroll = () => this.setState({ scrolled: window.scrollY > 18 });
    onEscape = (e) => { if (e.key === 'Escape')
        this.setState({ expanded: false }); };
    componentDidMount() { window.addEventListener('scroll', this.onScroll, { passive: true }); window.addEventListener('keydown', this.onEscape); this.onScroll(); }
    componentWillUnmount() { window.removeEventListener('scroll', this.onScroll); window.removeEventListener('keydown', this.onEscape); }
    close = () => this.setState({ expanded: false });
    render() {
        const { expanded, scrolled } = this.state;
        return React.createElement("header", { className: `site-header ${scrolled ? 'site-header--scrolled' : ''} ${expanded ? 'site-header--open' : ''}` },
            React.createElement("div", { className: "container site-header__inner" },
                React.createElement("a", { href: "#inicio", className: "site-header__brand", onClick: this.close, "aria-label": "Voltar ao in\u00EDcio" },
                    React.createElement(Brand, null)),
                React.createElement("nav", { className: `site-nav ${expanded ? 'site-nav--open' : ''}`, id: "principal-nav", "aria-label": "Navega\u00E7\u00E3o principal" },
                    links.map(link => React.createElement("a", { key: link.href, href: link.href, onClick: this.close }, link.label)),
                    React.createElement("a", { className: "site-nav__mobile-cta", href: "#solucoes", onClick: this.close },
                        "Explorar solu\u00E7\u00F5es ",
                        React.createElement(Icon, { name: "arrow-up-right", size: 17 }))),
                React.createElement("a", { className: "site-header__cta", href: "#solucoes" },
                    "Explorar solu\u00E7\u00F5es ",
                    React.createElement(Icon, { name: "arrow-up-right", size: 17 })),
                React.createElement("button", { type: "button", className: "menu-toggle", "aria-expanded": expanded, "aria-controls": "principal-nav", "aria-label": expanded ? 'Fechar menu' : 'Abrir menu', onClick: () => this.setState({ expanded: !expanded }) },
                    React.createElement(Icon, { name: expanded ? 'close' : 'menu', size: 24 }))));
    }
}
