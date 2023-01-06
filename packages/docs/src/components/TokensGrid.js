import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../styles/tokens-grid.css";
export function TokensGrid({ tokens, hasRemValue = false }) {
    return (_jsxs("table", Object.assign({ className: "tokens-grid" }, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Name" }), _jsx("th", { children: "Value" }), hasRemValue && _jsx("th", { children: "Pixels" })] }) }), _jsx("tbody", { children: Object.entries(tokens).map(([key, value]) => {
                    return (_jsxs("tr", { children: [_jsx("td", { children: key }), _jsx("td", { children: value }), hasRemValue && (_jsxs("td", { children: [Number(value.replace("rem", "")) * 16, "px"] }))] }, key));
                }) })] })));
}
