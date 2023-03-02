import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useAddData } from "../../firebase/config";
const Create = () => {
	const { addItem } = useAddData();
	const navigate = useNavigate();
	const [data, setData] = useState({
		title: "",
		ingredients: [],
		method: "",
		cookingTime: "",
	});
	const [ingredient, setIngredient] = useState("");

	const handleIng = (e) => {
		e.preventDefault();
		if (!data.ingredients.includes(ingredient)) {
			setIngredient("");
			setData((prev) => {
				return {
					...prev,
					ingredients: [...data.ingredients, ingredient],
				};
			});
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			!data.title == "" &&
			!data.method == "" &&
			!data.ingredients == [] &&
			!data.cookingTime == ""
		) {
			addItem(data)
				.then(() => {
					navigate("/");
				})
				.catch(() => {
					console.log("xato");
				});
			setData({
				title: "",
				ingredients: [],
				method: "",
				cookingTime: "",
			});
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-xl mb-10 bg-slate-500 mx-auto rounded px-5 py-10 flex flex-col items-center">
			<label className="w-full mb-5">
				<span className="text-lg">Title : *</span> <br />
				<input
					className="w-full placeholder:text-zinc-300 mt-2 text-xl rounded text-teal-0 bg-slate-400 p-3 shadow-lg duration-300 shadow-black/50 hover:shadow-black outline-none"
					placeholder="title"
					type="text"
					onChange={(e) => {
						setData((prev) => {
							return {
								...prev,
								title: e.target.value,
							};
						});
					}}
					value={data.title}
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
							setIngredient(e.target.value);
						}}
						type="text"
						value={ingredient}
					/>
					<button
						type="submit"
						onClick={handleIng}
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
						setData((prev) => {
							return {
								...prev,
								method: e.target.value,
							};
						});
					}}
					value={data.method}
					id=""></textarea>
			</label>
			<label className="w-full mb-10">
				<span className="text-lg">Cooking time (minutes): *</span>{" "}
				<br />
				<input
					className="w-full  mt-2 rounded bg-slate-400 p-3 placeholder:text-zinc-300 text-xl text-teal-0 shadow-lg duration-300 shadow-black/50 hover:shadow-black outline-none"
					type="number"
					onChange={(e) => {
						setData((prev) => {
							return {
								...prev,
								cookingTime: e.target.value,
							};
						});
					}}
					value={data.cookingTime}
					placeholder="cooking time"
				/>
			</label>
			<button
				type="submit"
				className="bg-teal-200 duration-300 px-5 py-2 text-xl font-bold rounded text-gray-800 hover:shadow-lg hover:shadow-black/40 ">
				Submit
			</button>
		</form>
	);
};

export default Create;
