import React from "react";
import { Link } from "react-router-dom";
const CookingItem = ({ item }) => {
	return (
		<div className=" p-4 rounded bg-slate-600 shadow-lg shadow-black duration-1000 flex items-center justify-between flex-col hover:rotate-[-12deg] hover:cursor-pointer hover:z-10">
			<div className="flex items-center flex-col mb-3">
				<h3 className="text-2xl font-bold text-teal-200 mb-3">
					{item.title}
				</h3>
				<p className=" text-teal-100 text-xl mb-2">
					<span className="italic">{item.cookingTime}</span>⏱️
				</p>
				<p>{item.method}...</p>
			</div>
			<Link
				className="mb-3 bg-teal-200 font-semibold duration-300 px-5 py-1 rounded text-gray-800 hover:shadow-lg hover:shadow-black/40 "
				to={`/recipe/${item.id}`}>
				This Cook
			</Link>
		</div>
	);
};

export default CookingItem;