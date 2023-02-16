import { useEffect, useState } from "react";

const useFetch = (url, methood = "GET", dataa) => {
	const [data, setData] = useState(null);
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(null);
	const getData = async (url, methood, dataa) => {
		setPending(true);
		try {
			const req = await fetch(url, 
				{
				method: methood,
				headers: {
					"Content-Type": "application/json",
				},
				body: dataa ? JSON.stringify(dataa) : null,
			}
			);
			if (!req.ok) {
				throw new Error("Error!!!");
			}
			const data = await req.json();

			setData(data);
			setPending(false);
			setError(null);
		} catch (err) {
			setPending(false);
			setError(err.message);
		}
	};
	useEffect(() => {
		getData(url, methood, dataa);
	}, [url, methood, dataa]);
	return { data, pending, error };
};
export default useFetch;
