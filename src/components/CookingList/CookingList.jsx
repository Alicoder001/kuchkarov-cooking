import React from "react";
import CookingItem from "../CookingItem/CookingItem";

const CookingList = ({ data }) => {
	return (
		<data className="grid grid-cols-3 gap-4">
			{data &&
				data.map((item) => {
					return <CookingItem key={item.id} item={item} />;
				})}
		</data>
	);
};

export default CookingList;
