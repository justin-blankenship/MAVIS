import React from 'react';
import '../App.css';

const ZipForm = props => (

    <div className="row justify-content-center">
		<div>
			<div className="mx-auto">
				<form className="pl-5 pr-5 text-nowrap" onSubmit={props.getWeather}>
			    	<input className="formInputArrowDelete" type="number" name="zip" placeholder="Zip Code..."/>
			    	<input type="text" name="country" placeholder="Country..."/>    
			    	<button>Get Weather</button>
			    </form>
			</div>
		</div>
	</div>

);

export default ZipForm;