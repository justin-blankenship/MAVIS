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
	    		<div className="linkback float-right">
					<p>Powered by <a rel="noopener noreferrer" href="https://www.worldweatheronline.com/developer/api/docs/astronomy-api.aspx" target="_blank">World Weather Online</a></p>
				</div>
			</div>
		</div>
	</div>

);

export default MoonZipForm;