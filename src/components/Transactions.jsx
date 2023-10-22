import React, { useState, useEffect, useMemo } from 'react';
import Transaction from '../components/Transaction';

const API = import.meta.env.VITE_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("")

useEffect(() => {
  fetch(`${API}/transactions`)
  .then((response) => response.json)
  .then(transactions => setTransactions(transactions))
  .catch(error => console.log(error))
}, []);

function getCategoryTransactions() {
  if (!selectedCategory) {
    return transactions
  } 
  return transactions.filter((transaction) => transaction.category === selectedCategory)
}

let filteredTransactions = useMemo(getCategoryTransactions => [selectedCategory, transactions])

const handleCategoryChange = (e) => {
		setSelectedCategory(e.target.value)
	}

  return (
	<div className="Transactions">
    <section>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name of Transaction</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            return <Transaction key={index} transaction={transaction} index={index} />
          })}
        </tbody>
      </table>
    </section>
    <div className="category-filter">
      <label htmlFor="category">Category:</label>
				<select name="category" id="category" value={category} onSelect={handleCategoryChange}>
					<option value="">Select Category</option>
					<option value="Entertainment">Entertainment</option>
					<option value="Grocery">Grocery</option>
					<option value="Income">Income</option>
					<option value="Pets">Pets</option>
					<option value="Savings">Savings</option>
				</select>
    </div>
    <div className="filtered-transactions">
        {filteredList.map((transaction, index) => (
          <Transaction {...transaction} key={index} />
        ))}
    </div>
  </div>
  )
}

export default Transactions