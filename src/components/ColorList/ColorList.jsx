import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
const colors = ["#B3005E", "#060047", "#362FD9"];
const ColorList = () => {
	const { changeColor, mode, changeMode } = useTheme();
	return (
		<div className="max-w-screen-lg mx-auto flex justify-between items-center mt-8 mb-8">
			<div>
				{mode == "light" && (
					<FaMoon
						onClick={() => {
							changeMode("dark");
						}}
						className="text-4xl cursor-pointer text-black "
					/>
				)}
				{mode == "dark" && (
					<BsSunFill
						onClick={() => {
							changeMode("light");
						}}
						className="text-4xl cursor-pointer "
					/>
				)}
			</div>
			<div className="flex gap-2 ">
				{colors.map((color) => {
					return (
						<div
							className="shadow-xl hover:scale-105 shadow-black/50 duration-500 hover:shadow-black/100"
							key={color}
							onClick={() => {
								changeColor(color);
							}}
							style={{
								background: `${color}`,
								width: "45px",
								height: "45px",
								borderRadius: "50%",
								cursor: "pointer",
							}}></div>
					);
				})}
			</div>
		</div>
	);
};

export default ColorList;
