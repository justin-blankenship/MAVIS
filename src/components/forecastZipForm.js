import React from 'react';
import '../App.css';

const ForecastZipForm = props => (
	
	<div>
		<form onSubmit={props.getForecast}>
	    	<input className="formInputArrowDelete" type="number" name="zip" placeholder="Zip Code..."/>
	    	<input type="text" name="country" placeholder="Country..."/>    
	    	<button>5 Day Forecast</button>
	    </form>
    </div>
);

export default ForecastZipForm;