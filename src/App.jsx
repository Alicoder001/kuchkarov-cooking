import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useTheme } from "./hooks/useTheme";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Search from "./pages/Search/Search";
import Recipe from "./pages/Recipe/Recipe";
import Navbar from "./components/Navbar/Navbar";
import ColorList from "./components/ColorList/ColorList";
function App() {
	const { mode } = useTheme();
	return (
		<div className={`${mode} h-full `}>
			<div className="App  h-full bg-slate-50 duration-700  dark:bg-slate-900 text-white">
				<Router>
					<Navbar />
					<ColorList />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/create" element={<Create />} />
						<Route path="/search" element={<Search />} />
						<Route path="/recipe/:id" element={<Recipe />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
