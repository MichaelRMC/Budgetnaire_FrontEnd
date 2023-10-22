import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

function TransactionsEditForm() {
	let { index } = useParams();
	const navigate = useNavigate();
	const [date, setDate] = useState("");
	const [name, setName] = useState("");
	const [business, setBusiness] = useState("");
	const [amount, setAmount] = useState("");
	const [category, setCategory] = useState("")
	const [transaction, setTransaction] = useState({
		date: "",
		name: "",
		amount: "",
		business: "",
		category: ""
	});


	const handleDateChange = (e) => {
		setDate(e.target.value);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleBusinessChange = (e) => {
		setBusiness(e.target.value);
	};

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	};

	const handleCategoryChange = (e) => {
		setCategory(e.target.value)
	}

	useEffect(() => {
		fetch(`${API}/transactions/${index}`)
		.then(response => response.json)
		.then(transaction =>  {
			setTransaction(transaction)
		};) 
	}, [index, navigate]);

	const httpOptions = {
			method: "PUT",
			body: JSON.stringify(transaction),
			headers: {
				"Content-Type": "application/json",
			},
		}

	const updateTransaction = () => {
		fetch(`${API}/transactions/${index}`, httpOptions)
			.then(() => {
				alert(`${transaction.name} has been updated!`)
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
				<label htmlFor="name">Name of Transaction:</label>
				<input
					type="text"
					name="name"
					id="name"
					value={transaction.name}
					onChange={handleNameChange}
				/>
				<label htmlFor="business">From:</label>
				<input
					type="text"
					name="business"
					id="business"
					value={transaction.business}
					onSubmit={handleBusinessChange}
				/>
				<label htmlFor="amount">Amount:</label>
				$
				<input
					type="number"
					name="amount"
					id="amount"
					step="0.01"
					value={transaction.amount}
					placeholder="0.00"
					onChange={handleAmountChange}
				/>
				<label htmlFor="category">Category:</label>
				<select name="category" id="category" value={transaction.category} onSelect={handleCategoryChange}>
					<option value="">Select Category</option>
					<option value="Entertainment">Entertainment</option>
					<option value="Grocery">Grocery</option>
					<option value="Income">Income</option>
					<option value="Pets">Pets</option>
					<option value="Savings">Savings</option>
				</select>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default TransactionsEditForm;
