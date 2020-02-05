import React from 'react';
import '../App.css';

const ZipForm = props => (
	<div>
		<form onSubmit={props.getWeather}>
	    	<input className="formInputArrowDelete" type="number" name="zip" placeholder="Zip Code..."/>
	    	<input type="text" name="country" placeholder="Country..."/>    
	    	<button>Get Weather</button>
	    </form>
	    <br/>
    </div>
);

export default ZipForm;