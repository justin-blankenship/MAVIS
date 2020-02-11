import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
	.tableData {
		vertical-align: middle;
	}

	p {
		margin: 0;
		vertical-align: middle;
	}

	.imgStyle {
		height: 2rem;
		width: 2rem;
	}
`;

const MoonTable = props => (

	<Styles>

		<div className="table-responsive-sm text-center">

			<br/>

			<h5>{props.zip && <p>Moon Phases for {props.zip}</p>}</h5>

			<div>{props.zip &&
			
				<table className="table table-sm table-dark table-vertical-align tableData">
			  		<thead>
			    		<tr>
			    			<th scope="col">Time Zone</th>
			      			<th scope="col">Moon Rise</th>
			      			<th scope="col">Moon Set</th>
			      			<th scope="col">Moon Phase</th>
			      			<th scope="col">Illumination</th>
			    		</tr>
			  		</thead>
			  		<tbody>
			    		<tr>
			    			<td>{props.zone && <p>{props.zone}</p>}</td>
			      			<td>{props.moonrise && <p>{props.moonrise}</p>}</td>
			      			<td>{props.moonset && <p>{props.moonset}</p>}</td>
			      			<td>{props.moonphase && <p>{props.moonphase}</p>}</td>
			      			<td>{props.illumination && <p>{props.illumination}%</p>}</td>
			    		</tr>
			  		</tbody>
				</table>
			}</div>
		</div>
		
	</Styles>   
);

export default MoonTable;