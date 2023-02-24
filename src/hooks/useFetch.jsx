import { useEffect, useState } from "react";

const useFetch = (url, method = "GET") => {
	const [data, setData] = useState(null);
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(null);
	const [options, setOptions] = useState(null);

	const getOption = (data) => {
		setOptions({
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	};

	const getData = async (fetchOptions) => {
		setPending(true);
		try {
			const req = await fetch(url, fetchOptions);
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
		if (method == "GET") {
			getData();
		}
		if (method == "POST" && options) {
			getData(options);
		}
	}, [url, method, options]);
	return { data, pending, error, getOption };
};
export default useFetch;
 