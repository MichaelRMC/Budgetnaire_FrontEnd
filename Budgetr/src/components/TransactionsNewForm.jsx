import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL

function TransactionsNewForm() {
  const navigate = useNavigate()
	const [date, setDate] = useState("");
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");
	const [business, setBusiness] = useState("");
  const [transaction, setTransaction] = useState({
    date:"",
    name:"",
    amount: "",
    business: ""
  })

  const addTransaction = () => {
    fetch(`${API}/transactions`, {
      method:"POST",
      body: JSON.stringify(transaction),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => {
      navigate(`/transactions`);
    })
    .catch((error) => console.error("catch", error))
  }

	const handleDateChange = (e) => {
		setDate(e.target.value);
	}

  const handleNameChange = (e) => { 
    setName(e.target.value)
   }

   const handleAmountChange = (e) => {
    setAmount(e.target.value)
   }

   const handleBusinessChange = (e) => {
    setBusiness(e.target.value)
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
    addTransaction();
   }

  function resetForm() {
    setDate("");
    setName("")
    setAmount("")
    setBusiness("")
  }



	return (
		<div>
			<form className="add-transaction-form" onSubmit={handleSubmit}>
				<label htmlFor="date">Date:</label>
				<input
					type="date"
					name="date"
					id="date"
					value={date}
					onChange={handleDateChange}
				/>
				<label htmlFor="name">Name:</label>
				<input type="text" name="name" id="name" value={name} onChange={handleNameChange}/>
        <label htmlFor="amount">Amount:</label>
        $<input type="number" name="amount" id="amount" step="0.01" value={amount} onChange={handleAmountChange} />
        <label htmlFor="business">From:</label>
        <input type="text" name="business" id="business" value={business} onSubmit={handleBusinessChange} />
        <button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default TransactionsNewForm;
