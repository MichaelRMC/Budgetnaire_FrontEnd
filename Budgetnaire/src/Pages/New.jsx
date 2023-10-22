import TransactionNewForm from '../components/TransactionNewForm';
import Header from '../components/Header'

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