import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className=" bg-slate-600 shadow-lg shadow-black/50 mb-5">
			<nav className="flex justify-between max-w-screen-lg mx-auto py-4">
				<Link to={"/"}>
					<h1 className="font-bold text-teal-200">
						Kuchkarov-Cooking
					</h1>
				</Link>
				<div>
					<Link
						className="bg-teal-200 font-semibold duration-300 px-3 py-1 rounded text-gray-800 hover:shadow-lg hover:shadow-black/40 "
						to={"/create"}>
						<span>Create</span>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
