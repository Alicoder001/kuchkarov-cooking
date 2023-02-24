import React from "react";
import { Link } from "react-router-dom";
const CookingItem = ({ item }) => {
	return (
		<div className=" p-4 rounded bg-indigo-500 dark:bg-slate-600 shadow-lg shadow-black hover:shadow-slate-900  duration-500 flex items-center justify-between flex-col hover:scale-102 hover:cursor-pointer hover:z-10">
			<div className="flex items-center flex-col mb-3">
				<h3 className="text-2xl font-bold text-teal-200 mb-3">
					{item.title}
				</h3>
				<p className=" text-teal-100 text-xl mb-2">
					<span className="italic">{item.cookingTime} minutes</span>⏱️
				</p>
				<p>
					{item.method && item.method.length > 100
						? item.method.substring(0, 100)
						: item.method}
					...
				</p>
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
