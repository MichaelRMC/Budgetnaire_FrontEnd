import React, {useState, useEffect} from 'react'

function Home() {
const [data, setData] = useState("");

useEffect(() => {
	fetch(`${API}`)
		.then((response) => {
			return response.json();
		})
		.then((json) => setData(json))
		.catch((error) => console.error(error));
}, []);

  return (
	<div>Home</div>
  )
}

export default Home