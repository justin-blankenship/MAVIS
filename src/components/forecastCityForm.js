import React from 'react';

const ForecastCityForm = props => (

	<div>
		<br/>
		<p>OR</p>
		<form onSubmit={props.getForecast}>
    		<input type="text" name="city" placeholder="City..."/>
    		<input type="text" name="country" placeholder="Country..."/>
    		<button>5 Day Forecast</button>
    	</form>
   	</div>
);

export default ForecastCityForm;