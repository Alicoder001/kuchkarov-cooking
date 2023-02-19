import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Recipe = () => {
	const { id } = useParams();
	const { data, error, pending } = useFetch(
		`http://localhost:3000/recipes/${id}`
	);

	return (
		<>
			{data && (
				<div className="max-w-2xl p-10 rounded bg-slate-600 shadow-lg shadow-black flex items-center justify-between flex-col mx-auto">
					<div className="flex items-center flex-col mb-3">
						<h3 className="text-2xl font-bold text-teal-200 mb-3">
							{data.title}
						</h3>
						<p className=" text-teal-100 text-xl mb-2">
							<span className="italic">{data.cookingTime}</span>⏱️
						</p>
						<div className="mb-3">
							<span className="bg-teal-900 italic  p-1 text-white rounded">
								Ingredients :
							</span>
							{data.ingredients.map((ing) => {
								return (
									<span className="" key={ing}>
										{" "}
										{ing}
										{"  "}
									</span>
								);
							})}
						</div>
						<div>
							<span className="bg-teal-900 italic  p-1 text-white rounded">
								Methods :
							</span>
							<span>
								{data.method.length > 30
									? data.method.substring(0, 30)
									: data.method}
								...
							</span>
						</div>
					</div>
					<Link
						className="mb-3 bg-teal-200 font-semibold duration-300 px-5 py-1 rounded text-gray-800 hover:shadow-lg hover:shadow-black/40 "
						to={`/`}>
						Back
					</Link>
				</div>
			)}
		</>
	);
};

export default Recipe;
