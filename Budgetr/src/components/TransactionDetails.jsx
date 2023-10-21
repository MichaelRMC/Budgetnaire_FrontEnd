import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function TransactionDetails() {
	const [transaction, setTransaction] = useState({
		date: "",
		name: "",
		amount: "",
		business: "",
	});
	let {index} = useParams();
	let navigate = useNavigate();

	useEffect(() => {
		fetch(`${API}/transactions/${index}`)
		.then((response) => {
			return response.json
		}).then((json) => {
			setTransaction(json);
			}).catch(() => {
				navigate("/not_found")
			})
	}, [index, navigate])

const handleDelete = () => {
	fetch(`${API}/transaction/${index}`, {method:"DELETE"})
	.then(() => {
		navigate(`/transactions`)
	})
	.catch((error) => console.error(error); )
}
 
  return (
	<div>
		<article>
			
		</article>
	</div>
  )
}

export default TransactionDetails