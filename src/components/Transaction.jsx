import { Link } from "react-router-dom";

function Transaction ( { transaction, id } )
{
  console.log(id)
  return (
	 <tr>
    <td>
      {transaction.date}
    </td>
    <td>
     <Link to={`/transactions/${id}`}>{transaction.item_name}</Link> 
    </td>
    <td>{transaction.business}</td>
   </tr>
  )
}

export default Transaction