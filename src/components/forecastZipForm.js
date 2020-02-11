import React from 'react';
import '../App.css';

const ForecastZipForm = props => (

    <div className="row justify-content-center">
		<div>
			<div className="mx-auto">
				<form onSubmit={props.getForecast}>
	    			<input className="formInputArrowDelete" type="number" name="zip" placeholder="Zip Code..."/>
	    			<input type="text" name="country" placeholder="Country..."/>    
	    			<button>5 Day Forecast</button>
	    		</form>
			</div>
		</div>
	</div>

);

export default ForecastZipForm;