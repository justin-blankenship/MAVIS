/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Styles = styled.div`
	.tableData {
		vertical-align: middle;
	}

	p {
		margin: 0;
		vertical-align: middle;
	}

	.imgStyle {
		height: 10rem;
		width: 10rem;
	}
`;

const MoonTable = props => (

	<Styles>

		<div className="table-responsive-sm text-center">

			<br/>

			<h5>{props.zip && <p>Moon Phases for {props.zip}</p>}</h5>

			<div>{props.zip &&

				<div>			
					<table className="table table-sm table-dark table-vertical-align tableData rounded">
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
				    			<td>{props.zone && <p>{props.zone.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase()).replace(/_/g, " ").replace(/\//g, ' \/ ')}</p>}</td>
				      			<td>{props.moonrise && <p>{props.moonrise}</p>}</td>
				      			<td>{props.moonset && <p>{props.moonset}</p>}</td>
				      			<td>{props.moonphase && <p>{props.moonphase}</p>}</td>
				      			<td>{props.illumination && <p>{props.illumination}%</p>}</td>
				    		</tr>
				  		</tbody>
					</table>

					<hr className="bg-dark"/>

					<div className="row justify-content-center">
						<div className="col-4">
							<div className="mx-auto h-10 w-10 p-0 bg-dark rounded">
								<img
									className="imgStyle"
					    			src={require(".././assets/" + props.moonphase.charAt(0).toLowerCase()+props.moonphase.slice(1).replace(/\s/g, '') + ".png")}
					    			alt="Phase Image"
					  			/>
							</div>
						</div>
					</div>

	      			<hr className="bg-dark"/>

	      		</div>
			}</div>
		</div>
		
	</Styles>   
);

export default MoonTable;