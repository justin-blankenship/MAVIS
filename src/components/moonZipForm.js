import React from 'react';
import '../App.css';

const MoonZipForm = props => (

	<div className="row justify-content-center">
		<div>
			<div className="mx-auto">
				<form onSubmit={props.getMoonInfoByZip}>
	    			<input className="formInputArrowDelete" type="number" name="zip" placeholder="Zip Code..."/>   
	    			<button>Get Moon Info</button>
	    		</form>
			</div>
		</div>
	</div>

);

export default MoonZipForm;