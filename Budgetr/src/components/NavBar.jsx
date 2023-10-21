import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
	<nav>
    <h1>Budgetr</h1>
    <Link to="/transactions/new">
      <button>New Transaction</button>
    </Link>
  </nav>
  )
}

export default NavBar