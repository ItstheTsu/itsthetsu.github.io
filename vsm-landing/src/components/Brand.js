const React = window.React;
export default function Brand({ footer = false }) {
    return React.createElement("span", { className: `brand ${footer ? 'brand--footer' : ''}`, "aria-label": "VSM Inform\u00E1tica" },
        React.createElement("span", { className: "brand__mark", "aria-hidden": "true" },
            React.createElement("span", { className: "brand__v" }, "V"),
            React.createElement("span", { className: "brand__point" })),
        React.createElement("span", { className: "brand__word" },
            React.createElement("strong", null, "VSM"),
            React.createElement("small", null, "INFORM\u00C1TICA")));
}
