import React, { useState, useEffect } from "react";
import Transaction from "../components/Transaction";

const API = import.meta.env.VITE_API_URL;

function Transactions() {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		fetch(`${API}/transactions`)
			.then((response) => response.json())
			.then( transactions =>
			{
				console.log(transactions);
				setTransactions(transactions)
			})
			.catch((error) => console.error(error))
	}, []);

	return (
		<div className='Transactions'>
			<section>
				<table>
					<thead>
						<tr>
							<th>Date</th>
              <th>Name of Transaction</th>
              <th>Business</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((transaction, index) => {
							return (
								<Transaction
									key={index}
									transaction={transaction}
									index={index}
								/>
							);
						})}
					</tbody>
				</table>
			</section>
		</div>
	);
}

export default Transactions;
