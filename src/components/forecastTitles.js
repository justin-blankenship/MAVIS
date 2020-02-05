import React from 'react';
import './titleStyle.css';

const ForecastTitles = () => (
	<div className="Titles">

		<div className="titleContainer">
			<div className="animate seven">
				<span>5</span>&nbsp;
				<span>d</span><span>a</span><span>y</span>&nbsp;
				<span>f</span><span>o</span><span>r</span><span>e</span><span>c</span><span>a</span><span>s</span><span>t</span>
     		</div>
		</div>
		<br></br>
    	<h5 className="subtitle">Enter a location to see the 5 day forecast.</h5>
    	<br></br>
    </div>
);

export default ForecastTitles;