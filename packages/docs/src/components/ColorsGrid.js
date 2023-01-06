import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { colors } from "@taurus-ui/tokens";
import { getContrast } from "polished";
export function ColorsGrid() {
    return Object.entries(colors).map(([key, color]) => {
        return (_jsx("div", Object.assign({ style: { backgroundColor: color, padding: "2rem" } }, { children: _jsxs("div", Object.assign({ style: {
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: "monospace",
                    color: getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF",
                } }, { children: [_jsxs("strong", { children: ["$", key] }), _jsx("strong", { children: color })] })) }), key));
    });
}
