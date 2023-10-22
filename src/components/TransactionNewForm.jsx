import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function TransactionsNewForm() {
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
	});

	const addTransaction = () => {
		const httpOptions = {
			method: "POST",
			body: JSON.stringify(transaction),
			headers: {
				"Content-Type": "application/json",
			},
		};

		fetch(`${API}/transactions`, httpOptions)
			.then((response) => {
				alert(`{transaction.name} was added to the database!`);
				navigate(`/transactions`);
			})
			.catch((error) => console.error(error));
	};

	const handleDateChange = (e) => {
		setDate(e.target.value);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};


	const handleFromChange = (e) => {
		setBusiness(e.target.value);
	};

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	};

	const handleCategoryChange = (e) => {
		setCategory(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		addTransaction();
	};

	return (
		<div>
			<form className='add-transaction-form' onSubmit={handleSubmit}>
				<label htmlFor='date'>Date:</label>
				<input
					type='date'
					name='date'
					id='date'
					value={date}
					onChange={handleDateChange}
				/>
				<label htmlFor='name'>Name of Transaction:</label>
				<input
					type='text'
					name='name'
					id='name'
					value={name}
					onChange={handleNameChange}
				/>
				<label htmlFor='amount'>Amount:</label>
				$
				<input
					type='number'
					name='amount'
					id='amount'
					step='0.01'
					value={amount}
					placeholder='0.00'
					onChange={handleAmountChange}
				/>
				<label htmlFor='from'>From:</label>
				<input
					type='text'
					name='from'
					id='from'
					value={from}
					onSubmit={handleFromChange}
				/>
				<label htmlFor="category">Category:</label>
				<select name="category" id="category" value={category} onSelect={handleCategoryChange}>
					<option value="">Select Category</option>
					<option value="Entertainment">Entertainment</option>
					<option value="Grocery">Grocery</option>
					<option value="Income">Income</option>
					<option value="Pets">Pets</option>
					<option value="Savings">Savings</option>
					<option value="Grocery">Grocery</option>
					<option value="Housing">Housing</option>
					<option value="Transportation">Transportation</option>
					<option value="Insurance">Insurance</option>
					<option value="Utilities">Utilities</option>
					<option value="Personal">Personal</option>
				</select>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default TransactionsNewForm;
