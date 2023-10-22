import TransactionNewForm from '../components/TransactionsNewForm';
import NavBar from "./components/NavBar";

function New() {
  return (
		<div className='New Transaction'>
			<NavBar />
			<h2>New Transaction</h2>
			<TransactionNewForm />
		</div>
	);
}

export default New