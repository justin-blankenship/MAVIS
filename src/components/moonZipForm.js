import React from 'react';
import '../App.css';

const MoonZipForm = props => (
	
	<div>
		<form onSubmit={props.getMoonInfoByZip}>
	    	<input className="formInputArrowDelete" type="number" name="zip" placeholder="Zip Code..."/>   
	    	<button>Get Moon Info</button>
	    </form>
    </div>
);

export default MoonZipForm;