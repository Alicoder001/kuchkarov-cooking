import React, { useEffect, useState } from "react";
import CookingList from "../../components/CookingList/CookingList";
import useFetch from "../../hooks/useFetch";
import { useData } from "../../firebase/config";
const Home = () => {
	const { data, pending, error, getData } = useData();
	useEffect(() => {
		getData();
	}, []);
	return (
		<div className=" max-w-screen-lg mx-auto ">
			{pending && <div>loading</div>}
			<CookingList data={data && data} />
		</div>
	);
};

export default Home;
