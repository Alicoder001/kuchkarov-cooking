import React from "react";
import CookingList from "../../components/CookingList/CookingList";
import useFetch from "../../hooks/useFetch";
const Home = () => {
	const { data, error, pending } = useFetch("http://localhost:3000/recipes");
	return (
		<div className=" max-w-screen-lg mx-auto ">
			<CookingList data={data && data} />
		</div>
	);
};

export default Home;
