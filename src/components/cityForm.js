import React from 'react';

const CityForm = props => (

    <div className="row justify-content-center">
		<div>
			<div className="mx-auto">
				<p className="titleContainer text-center">or</p>
				<form onSubmit={props.getWeather}>
			    	<input type="text" name="city" placeholder="City..."/>
			    	<input type="text" name="country" placeholder="Country..."/>     
			    	<button>Get Weather</button>
	    		</form>
			</div>
		</div>
	</div>
	
);

export default CityForm;