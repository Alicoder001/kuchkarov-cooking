import { createContext, useReducer } from "react";

const ThemeContext = createContext();
const handleState = (state, action) => {
	switch (action.type) {
		case "change-color":
			return { ...state, color: action.payload };
		case "change-mode":
			return { ...state, mode: action.payload };
		default:
			return state;
	}
};
const ThemeProvider = ({ children }) => {
	const [state, dipatch] = useReducer(handleState, {
		color: "#B3005E",
		mode: "dark",
	});
	const changeColor = (color) => {
		dipatch({ type: "change-color", payload: color });
	};
	const changeMode = (mode) => {
		dipatch({ type: "change-mode", payload: mode });
	};
	return (
		<ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
export { ThemeContext, ThemeProvider };
