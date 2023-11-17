import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function TransactionDetails() {
	const [transaction, setTransaction] = useState({
		date: "",
		name: "",
		amount: "",
		business: "",
		category: ""
	});
	let {index} = useParams();
	let navigate = useNavigate();

	useEffect(() => {
		fetch(`${API}/transactions/${index}`)
			.then(response => response.json())
			.then( transaction =>
			{
				console.log(transaction);
				setTransaction(transaction);
			})
			.catch(() => navigate("/not_found"))
	}, [index, navigate]);

	const handleDelete = () => {
		const httpOptions = { "method": "DELETE" };

		fetch(`${API}/transaction/${index}`, httpOptions)
			.then((res) => {
				alert("Your transaction has been deleted!");
				navigate(`/transactions`);
			})
			.catch((error) => console.error(error));
	};

	return (
		<article>
			<h3>{transaction.date}</h3>
			<h5>{transaction.name}</h5>
			<span>{transaction.business}</span>
			<h2>{transaction.amonut}</h2>
			<h3>{transaction.category}</h3>
			<div className='transaction-navigation'>
				<div>
					{" "}
					<Link to={`/transactions`}>
						<button>Back</button>
					</Link>
				</div>
				<div>
					{" "}
					<Link to={`/transactions/${index}/edit`}>
						<button>Edit</button>
					</Link>
				</div>
				<div>
					{" "}
					<button onClick={handleDelete}>Delete</button>
				</div>
			</div>
		</article>
	);
}

export default TransactionDetails;
