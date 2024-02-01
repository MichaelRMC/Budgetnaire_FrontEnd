import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function TransactionsNewForm() {
	const navigate = useNavigate();
	const [transaction, setTransaction] = useState({
		date: "",
		name: "",
		amount: "",
		business: "",
		category: ""
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
		setTransaction({...transaction, date: e.target.value});
	};

	const handleNameChange = (e) => {
		setTransaction( { ...transaction, name: e.target.value } );
	};


	const handleBusinessChange = (e) => {
		setTransaction({ ...transaction, business: e.target.value });
	};

	const handleAmountChange = (e) => {
		setTransaction({ ...transaction, amount: e.target.value });
	};

	const handleCategoryChange = (e) => {
		setTransaction({ ...transaction, category: e.target.value });
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
				<br />
				<label htmlFor='name'>Name of Transaction:</label>
				<input
					type='text'
					name='name'
					id='name'
					value={name}
					onChange={handleNameChange}
				/>
				<br />
				<label htmlFor='business'>Business:</label>
				<input
					type='text'
					name='business'
					id='business'
					value={business}
					onChange={handleBusinessChange}
				/>
				<br />
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
				<br />
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
