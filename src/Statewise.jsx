import React, { useState ,useEffect } from 'react'

const Statewise = () => {
	//create global object
	const [Data, updateData] = useState([])

	const getCovidData = async () => {
		const response = await fetch("https://data.askbhunte.com/api/v1/districts")
		const actualData = await response.json()
		updateData(actualData)
	}
    
	useEffect(() => {
		getCovidData()
	})

	return(
		  <>
		   <div className="container-fluid m-3">
		   	 <h2 className="text-bold">Covid-19 Tracker App</h2><br />
		   	 <div className="table-responsive">
		   	  <table className="table table-hover">
		   	    <thead className="thead-dark">
		   	     <tr>
		   	     	<th>ID</th>
		   	     	<th>Province</th>
		   	     	<th>Title</th>
		   	     </tr>
		   	    </thead>
		   	    <tbody>
		   	    		{
		   	    			Data.map((val,index) => {
		   	    				return(
		   	    				    <tr key={index}>
			   	    				  <td>{val.id}</td>
			   	    				  <td>{val.province}</td>
			   	    				  <td>{val.title}</td>
		   	    				    </tr>
		   	    				)
		   	    			})
		   	    		}
		   	    </tbody>
		   	  </table>
		   	 </div>
		   </div>
		  </>
		)
}
export default Statewise