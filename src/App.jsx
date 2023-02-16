import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Search from "./pages/Search/Search";
import Recipe from "./pages/Recipe/Recipe";
import Navbar from "./components/Navbar/Navbar";
function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App bg-slate-800 h-full text-white">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/search" element={<Search />} />
					<Route path="/recipe/:id" element={<Recipe />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
