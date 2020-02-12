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
    			<div className="linkback float-right">
					<p>Powered by <a rel="noopener noreferrer" href="https://openweathermap.org/" target="_blank">Open Weather Maps</a></p>
				</div>
			</div>
		</div>
	</div>
	
);

export default ForecastCityForm;