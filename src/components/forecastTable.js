import React from 'react';

const ForecastTable = props => (

	<div class="table-responsive-sm text-center">

		<br/>

		<h5>{props.city && props.country && <p>5 Day Forecast for {props.city}, {props.country}</p>}</h5>

		<div>{props.city && props.country &&
		
			<table class="table table-sm table-dark">
		  		<thead>
		    		<tr>
		      			<th scope="col">Date</th>
		      			<th scope="col">Time</th>
		      			<th scope="col">Temperature</th>
		      			<th scope="col">Conditions</th>
		    		</tr>
		  		</thead>
		  		<tbody>
		    		<tr>
		    			<td>{props.date0 && <p>{props.date0.substring(0, 10)}</p>}</td>
		      			<td>{props.date0 && <p>{props.date0.substring(10)}</p>}</td>
		      			<td>{props.temperature0 && <p>{props.temperature0}&#x2109;</p>}</td>
		      			<td>{props.description0 && <p>{props.description0.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date1 && <p>{props.date1.substring(0, 10)}</p>}</td>
		      			<td>{props.date1 && <p>{props.date1.substring(10)}</p>}</td>
		      			<td>{props.temperature1 && <p>{props.temperature1}&#x2109;</p>}</td>
		      			<td>{props.description1 && <p>{props.description1.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date2 && <p>{props.date2.substring(0, 10)}</p>}</td>
		      			<td>{props.date2 && <p>{props.date2.substring(10)}</p>}</td>
		      			<td>{props.temperature2 && <p>{props.temperature2}&#x2109;</p>}</td>
		      			<td>{props.description2 && <p>{props.description2.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date2 && <p>{props.date3.substring(0, 10)}</p>}</td>
		      			<td>{props.date3 && <p>{props.date3.substring(10)}</p>}</td>
		      			<td>{props.temperature3 && <p>{props.temperature3}&#x2109;</p>}</td>
		      			<td>{props.description3 && <p>{props.description3.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date2 && <p>{props.date4.substring(0, 10)}</p>}</td>
		      			<td>{props.date4 && <p>{props.date4.substring(10)}</p>}</td>
		      			<td>{props.temperature4 && <p>{props.temperature4}&#x2109;</p>}</td>
		      			<td>{props.description4 && <p>{props.description4.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date2 && <p>{props.date5.substring(0, 10)}</p>}</td>
		      			<td>{props.date5 && <p>{props.date5.substring(10)}</p>}</td>
		      			<td>{props.temperature5 && <p>{props.temperature5}&#x2109;</p>}</td>
		      			<td>{props.description5 && <p>{props.description5.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date6 && <p>{props.date6.substring(0, 10)}</p>}</td>
		      			<td>{props.date6 && <p>{props.date6.substring(10)}</p>}</td>
		      			<td>{props.temperature6 && <p>{props.temperature6}&#x2109;</p>}</td>
		      			<td>{props.description6 && <p>{props.description6.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date7 && <p>{props.date7.substring(0, 10)}</p>}</td>
		      			<td>{props.date7 && <p>{props.date7.substring(10)}</p>}</td>
		      			<td>{props.temperature7 && <p>{props.temperature7}&#x2109;</p>}</td>
		      			<td>{props.description7 && <p>{props.description7.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date8 && <p>{props.date8.substring(0, 10)}</p>}</td>
		      			<td>{props.date8 && <p>{props.date8.substring(10)}</p>}</td>
		      			<td>{props.temperature8 && <p>{props.temperature8}&#x2109;</p>}</td>
		      			<td>{props.description8 && <p>{props.description8.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date9 && <p>{props.date9.substring(0, 10)}</p>}</td>
		      			<td>{props.date9 && <p>{props.date9.substring(10)}</p>}</td>
		      			<td>{props.temperature9 && <p>{props.temperature9}&#x2109;</p>}</td>
		      			<td>{props.description9 && <p>{props.description9.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date10 && <p>{props.date10.substring(0, 10)}</p>}</td>
		      			<td>{props.date10 && <p>{props.date10.substring(10)}</p>}</td>
		      			<td>{props.temperature10 && <p>{props.temperature10}&#x2109;</p>}</td>
		      			<td>{props.description10 && <p>{props.description10.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date11 && <p>{props.date11.substring(0, 10)}</p>}</td>
		      			<td>{props.date11 && <p>{props.date11.substring(10)}</p>}</td>
		      			<td>{props.temperature11 && <p>{props.temperature11}&#x2109;</p>}</td>
		      			<td>{props.description11 && <p>{props.description11.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date12 && <p>{props.date12.substring(0, 10)}</p>}</td>
		      			<td>{props.date12 && <p>{props.date12.substring(10)}</p>}</td>
		      			<td>{props.temperature12 && <p>{props.temperature12}&#x2109;</p>}</td>
		      			<td>{props.description12 && <p>{props.description12.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date13 && <p>{props.date13.substring(0, 10)}</p>}</td>
		      			<td>{props.date13 && <p>{props.date13.substring(10)}</p>}</td>
		      			<td>{props.temperature13 && <p>{props.temperature13}&#x2109;</p>}</td>
		      			<td>{props.description13 && <p>{props.description13.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date14 && <p>{props.date14.substring(0, 10)}</p>}</td>
		      			<td>{props.date14 && <p>{props.date14.substring(10)}</p>}</td>
		      			<td>{props.temperature14 && <p>{props.temperature14}&#x2109;</p>}</td>
		      			<td>{props.description14 && <p>{props.description14.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date15 && <p>{props.date15.substring(0, 10)}</p>}</td>
		      			<td>{props.date15 && <p>{props.date15.substring(10)}</p>}</td>
		      			<td>{props.temperature15 && <p>{props.temperature15}&#x2109;</p>}</td>
		      			<td>{props.description15 && <p>{props.description15.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date16 && <p>{props.date16.substring(0, 10)}</p>}</td>
		      			<td>{props.date16 && <p>{props.date16.substring(10)}</p>}</td>
		      			<td>{props.temperature16 && <p>{props.temperature16}&#x2109;</p>}</td>
		      			<td>{props.description16 && <p>{props.description16.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date17 && <p>{props.date17.substring(0, 10)}</p>}</td>
		      			<td>{props.date17 && <p>{props.date17.substring(10)}</p>}</td>
		      			<td>{props.temperature17 && <p>{props.temperature17}&#x2109;</p>}</td>
		      			<td>{props.description17 && <p>{props.description17.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date18 && <p>{props.date18.substring(0, 10)}</p>}</td>
		      			<td>{props.date18 && <p>{props.date18.substring(10)}</p>}</td>
		      			<td>{props.temperature18 && <p>{props.temperature18}&#x2109;</p>}</td>
		      			<td>{props.description18 && <p>{props.description18.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date19 && <p>{props.date19.substring(0, 10)}</p>}</td>
		      			<td>{props.date19 && <p>{props.date19.substring(10)}</p>}</td>
		      			<td>{props.temperature19 && <p>{props.temperature19}&#x2109;</p>}</td>
		      			<td>{props.description19 && <p>{props.description19.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date20 && <p>{props.date20.substring(0, 10)}</p>}</td>
		      			<td>{props.date20 && <p>{props.date20.substring(10)}</p>}</td>
		      			<td>{props.temperature20 && <p>{props.temperature20}&#x2109;</p>}</td>
		      			<td>{props.description20 && <p>{props.description20.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date21 && <p>{props.date21.substring(0, 10)}</p>}</td>
		      			<td>{props.date21 && <p>{props.date21.substring(10)}</p>}</td>
		      			<td>{props.temperature21 && <p>{props.temperature21}&#x2109;</p>}</td>
		      			<td>{props.description21 && <p>{props.description21.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date22 && <p>{props.date22.substring(0, 10)}</p>}</td>
		      			<td>{props.date22 && <p>{props.date22.substring(10)}</p>}</td>
		      			<td>{props.temperature22 && <p>{props.temperature22}&#x2109;</p>}</td>
		      			<td>{props.description22 && <p>{props.description22.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date23 && <p>{props.date23.substring(0, 10)}</p>}</td>
		      			<td>{props.date23 && <p>{props.date23.substring(10)}</p>}</td>
		      			<td>{props.temperature23 && <p>{props.temperature23}&#x2109;</p>}</td>
		      			<td>{props.description23 && <p>{props.description23.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date24 && <p>{props.date24.substring(0, 10)}</p>}</td>
		      			<td>{props.date24 && <p>{props.date24.substring(10)}</p>}</td>
		      			<td>{props.temperature24 && <p>{props.temperature24}&#x2109;</p>}</td>
		      			<td>{props.description24 && <p>{props.description24.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date25 && <p>{props.date25.substring(0, 10)}</p>}</td>
		      			<td>{props.date25 && <p>{props.date25.substring(10)}</p>}</td>
		      			<td>{props.temperature25 && <p>{props.temperature25}&#x2109;</p>}</td>
		      			<td>{props.description25 && <p>{props.description25.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date26 && <p>{props.date26.substring(0, 10)}</p>}</td>
		      			<td>{props.date26 && <p>{props.date26.substring(10)}</p>}</td>
		      			<td>{props.temperature26 && <p>{props.temperature26}&#x2109;</p>}</td>
		      			<td>{props.description26 && <p>{props.description26.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date27 && <p>{props.date27.substring(0, 10)}</p>}</td>
		      			<td>{props.date27 && <p>{props.date27.substring(10)}</p>}</td>
		      			<td>{props.temperature27 && <p>{props.temperature27}&#x2109;</p>}</td>
		      			<td>{props.description27 && <p>{props.description27.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date28 && <p>{props.date28.substring(0, 10)}</p>}</td>
		      			<td>{props.date28 && <p>{props.date28.substring(10)}</p>}</td>
		      			<td>{props.temperature28 && <p>{props.temperature28}&#x2109;</p>}</td>
		      			<td>{props.description28 && <p>{props.description28.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date29 && <p>{props.date29.substring(0, 10)}</p>}</td>
		      			<td>{props.date29 && <p>{props.date29.substring(10)}</p>}</td>
		      			<td>{props.temperature29 && <p>{props.temperature29}&#x2109;</p>}</td>
		      			<td>{props.description29 && <p>{props.description29.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date30 && <p>{props.date30.substring(0, 10)}</p>}</td>
		      			<td>{props.date30 && <p>{props.date30.substring(10)}</p>}</td>
		      			<td>{props.temperature30 && <p>{props.temperature30}&#x2109;</p>}</td>
		      			<td>{props.description30 && <p>{props.description30.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date31 && <p>{props.date31.substring(0, 10)}</p>}</td>
		      			<td>{props.date31 && <p>{props.date31.substring(10)}</p>}</td>
		      			<td>{props.temperature31 && <p>{props.temperature31}&#x2109;</p>}</td>
		      			<td>{props.description31 && <p>{props.description31.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date32 && <p>{props.date32.substring(0, 10)}</p>}</td>
		      			<td>{props.date32 && <p>{props.date32.substring(10)}</p>}</td>
		      			<td>{props.temperature32 && <p>{props.temperature32}&#x2109;</p>}</td>
		      			<td>{props.description32 && <p>{props.description32.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date33 && <p>{props.date33.substring(0, 10)}</p>}</td>
		      			<td>{props.date33 && <p>{props.date33.substring(10)}</p>}</td>
		      			<td>{props.temperature33 && <p>{props.temperature33}&#x2109;</p>}</td>
		      			<td>{props.description33 && <p>{props.description33.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date34 && <p>{props.date34.substring(0, 10)}</p>}</td>
		      			<td>{props.date34 && <p>{props.date34.substring(10)}</p>}</td>
		      			<td>{props.temperature34 && <p>{props.temperature34}&#x2109;</p>}</td>
		      			<td>{props.description34 && <p>{props.description34.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date35 && <p>{props.date35.substring(0, 10)}</p>}</td>
		      			<td>{props.date35 && <p>{props.date35.substring(10)}</p>}</td>
		      			<td>{props.temperature35 && <p>{props.temperature35}&#x2109;</p>}</td>
		      			<td>{props.description35 && <p>{props.description35.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date36 && <p>{props.date36.substring(0, 10)}</p>}</td>
		      			<td>{props.date36 && <p>{props.date36.substring(10)}</p>}</td>
		      			<td>{props.temperature36 && <p>{props.temperature36}&#x2109;</p>}</td>
		      			<td>{props.description36 && <p>{props.description36.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date37 && <p>{props.date37.substring(0, 10)}</p>}</td>
		      			<td>{props.date37 && <p>{props.date37.substring(10)}</p>}</td>
		      			<td>{props.temperature37 && <p>{props.temperature37}&#x2109;</p>}</td>
		      			<td>{props.description37 && <p>{props.description37.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date38 && <p>{props.date38.substring(0, 10)}</p>}</td>
		      			<td>{props.date38 && <p>{props.date38.substring(10)}</p>}</td>
		      			<td>{props.temperature38 && <p>{props.temperature38}&#x2109;</p>}</td>
		      			<td>{props.description38 && <p>{props.description38.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		    		<tr>
		    			<td>{props.date39 && <p>{props.date39.substring(0, 10)}</p>}</td>
		      			<td>{props.date39 && <p>{props.date39.substring(10)}</p>}</td>
		      			<td>{props.temperature39 && <p>{props.temperature39}&#x2109;</p>}</td>
		      			<td>{props.description39 && <p>{props.description39.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
		    		</tr>
		  		</tbody>
			</table>
		}</div>
	</div>   
);

export default ForecastTable;