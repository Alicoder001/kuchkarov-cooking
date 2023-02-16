import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Create = () => {
	const [list, setList] = useState(null);
	const [title, setTitle] = useState(null);
	const [ing, setIng] = useState(null);
	const [method, setMethod] = useState(null);
	const [time, setTime] = useState(null);
	const [ingredient, setIngredient] = useState([]);

	const setFetch = (list) => {
		useFetch("http://localhost:3000/recipes", "POST", list);
	};
	setFetch(list);
	const handleIng = (ing) => {
		const newIng = [...ingredient, ing];
		setIngredient(newIng);
		console.log(newIng);
	};

	return (
		<form className="max-w-xl mb-4 bg-slate-500 mx-auto rounded px-5 py-10 flex flex-col items-center">
			<label className="w-full mb-5">
				<span className="text-lg">Title : *</span> <br />
				<input
					className="w-full placeholder:text-zinc-300 mt-2 text-xl rounded text-teal-0 bg-slate-400 p-3 shadow-lg duration-300 shadow-black/50 hover:shadow-black outline-none"
					placeholder="title"
					type="text"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
			</label>

			<div className="mb-5 w-full">
				<span className="text-lg">Ingradient : *</span> <br />
				<div className="w-full flex items-center gap-2">
					<input
						id="input"
						className="w-full placeholder:text-zinc-300   mt-2 text-xl text-teal-0 rounded bg-slate-400 p-3 shadow-lg duration-300 shadow-black/50 hover:shadow-black outline-none"
						placeholder="ingradient"
						onChange={(e) => {
							setIng(e.target.value);
						}}
						type="text"
					/>
					<button
						onClick={(e) => {
							e.preventDefault();
							ing.length !== 0 &&
								!ingredient.includes(ing) &&
								handleIng(ing);
							document.getElementById("input").innerHTML = "";
						}}
						className="  mt-2 px-4 py-3 text-xl font-bold shadow-lg duration-300 shadow-black/25 hover:shadow-black inline-block bg-teal-600 rounded">
						Add
					</button>
				</div>
			</div>

			<label className="w-full mb-5">
				<span className="text-lg">Method *</span> <br />
				<textarea
					className="w-full   mt-2 text-xl placeholder:text-zinc-300 text-teal-0 rounded bg-slate-400 p-3 shadow-lg duration-300 shadow-black/50 hover:shadow-black outline-none"
					placeholder="method"
					name=""
					onChange={(e) => {
						setMethod(e.target.value);
					}}
					id=""></textarea>
			</label>
			<label className="w-full mb-10">
				<span className="text-lg">Cooking time (minutes): *</span>{" "}
				<br />
				<input
					className="w-full  mt-2 rounded bg-slate-400 p-3 placeholder:text-zinc-300 text-xl text-teal-0 shadow-lg duration-300 shadow-black/50 hover:shadow-black outline-none"
					type="number"
					onChange={(e) => {
						setTime(e.target.value);
					}}
					placeholder="cooking time"
				/>
			</label>
			<Link
				className="bg-teal-200 duration-300 px-5 py-2 text-xl font-bold rounded text-gray-800 hover:shadow-lg hover:shadow-black/40 "
				to={"/create"}
				onClick={(e) => {
					e.preventDefault();
					if (title && ingredient && method && ingredient && time) {
						setList({
							title,
							ingredients: ingredient,
							method,
							cookingTime: `${time} minutes`,
						});
					}
				}}>
				<span>Submit</span>
			</Link>
		</form>
	);
};

export default Create;
