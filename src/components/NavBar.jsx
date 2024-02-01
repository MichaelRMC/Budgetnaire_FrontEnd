import {Link} from 'react-router-dom';

function NavBar() {
  return (
	<nav>
    <h1 className='Budgetnaire'>
      <Link to="/transactions">Budgetnaire</Link>
      </h1>
      <button className='TransactionNewForm-button'>
    <Link to="/transactions/new">New Transaction</Link>
    </button>
  </nav>
  )
}

export default NavBar