import React from 'react';

const ForecastCityForm = props => (

   	<div className="row justify-content-center">
		<div>
			<div className="mx-auto">
				<p className="titleContainer text-center">or</p>
				<form onSubmit={props.getForecast}>
    				<input type="text" name="city" placeholder="City..."/>
    				<input type="text" name="country" placeholder="Country..."/>
    				<button>5 Day Forecast</button>
    			</form>
			</div>
		</div>
	</div>
	
);

export default ForecastCityForm;