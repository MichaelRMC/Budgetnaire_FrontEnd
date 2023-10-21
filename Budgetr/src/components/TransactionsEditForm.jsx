import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function TransactionsEditForm() {
	let { index } = useParams();
	const navigate = useNavigate();
	const [date, setDate] = useState("");
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");
	const [business, setBusiness] = useState("");
	const [transaction, setTransaction] = useState({
		date: "",
		name: "",
		amount: "",
		business: "",
	});


	const handleDateChange = (e) => {
		setDate(e.target.value);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	};

	const handleBusinessChange = (e) => {
		setBusiness(e.target.value);
	};

	const updateTransaction = () => {
		fetch(`${API}/transactions`, {
			method: "PUT",
			body: JSON.stringify(transaction),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(() => {
				navigate(`/transactions/${index}`);
			})
			.catch((error) => console.error("catch", error));
	};

	useEffect(() => {
		fetch(`${API}/transactions/${index}`)
		.then((response) => {
			return response.json
		}).then((json) => {
			setTransaction(json);
			}).catch((error) => console.error(error);)
	}, [index])

	const handleSubmit = (e) => {
		e.preventDefault();
		updateTransaction();
		
	};

	return (
		<div>
			<form className="edit-transaction-form" onSubmit={handleSubmit}>
				<label htmlFor="date">Date:</label>
				<input
					type="date"
					name="date"
					id="date"
					value={transaction.date}
					onChange={handleDateChange}
				/>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					name="name"
					id="name"
					value={transaction.name}
					onChange={handleNameChange}
				/>
				<label htmlFor="amount">Amount:</label>
				$
				<input
					type="number"
					name="amount"
					id="amount"
					step="0.01"
					value={transaction.amount}
					onChange={handleAmountChange}
				/>
				<label htmlFor="business">From:</label>
				<input
					type="text"
					name="business"
					id="business"
					value={transaction.business}
					onSubmit={handleBusinessChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default TransactionsEditForm;
