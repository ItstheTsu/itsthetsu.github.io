const React = window.React;
const createRoot = node => ({ render: element => window.ReactDOM.render(element, node) });
import App from './App.js';

const root = document.getElementById('root');
if (!root)
    throw new Error('O elemento raiz não foi encontrado.');
createRoot(root).render(React.createElement(App, null));
const media = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !media.matches) {
    requestAnimationFrame(() => {
        const targets = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px 30px 0px' });
        targets.forEach(target => {
            target.classList.add('will-reveal');
            observer.observe(target);
        });
    });
}
