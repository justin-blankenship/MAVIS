import React from 'react';
import moment from 'moment';
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

const ForecastTable = props => (

	<Styles>

		<div className="table-responsive-sm text-center">

			<br/>

			<h5>{props.city && props.country && <p>5 Day Forecast for {props.city}, {props.country}</p>}</h5>

			<div>{props.city && props.country &&
			
				<table className="table table-sm table-dark table-vertical-align tableData">
			  		<thead>
			    		<tr>
			      			<th scope="col">Day</th>
			      			<th scope="col">Date</th>
			      			<th scope="col">Time</th>
			      			<th scope="col">Temperature</th>
			      			<th scope="col">Conditions</th>
			      			<th scope="col"></th>
			    		</tr>
			  		</thead>
			  		<tbody>
			    		<tr>
			    			<td>{props.date0 && <p>{moment(props.date0).format('dddd')}</p>}</td>
			    			<td>{props.date0 && <p>{moment(props.date0).format('ll')}</p>}</td>
			      			<td>{props.date0 && <p>{moment(props.date0).format('h A')}</p>}</td>
			      			<td>{props.temperature0 && <p>{props.temperature0}&#x2109;</p>}</td>
			      			<td>{props.description0 && <p>{props.description0.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			      			<td>{props.icon0 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon0 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date1 && <p>{moment(props.date1).format('dddd')}</p>}</td>
			    			<td>{props.date1 && <p>{moment(props.date1).format('ll')}</p>}</td>
			      			<td>{props.date1 && <p>{moment(props.date1).format('h A')}</p>}</td>
			      			<td>{props.temperature1 && <p>{props.temperature1}&#x2109;</p>}</td>
			      			<td>{props.description1 && <p>{props.description1.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			      			<td>{props.icon1 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon1 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date2 && <p>{moment(props.date2).format('dddd')}</p>}</td>
			    			<td>{props.date2 && <p>{moment(props.date2).format('ll')}</p>}</td>
			      			<td>{props.date2 && <p>{moment(props.date2).format('h A')}</p>}</td>
			      			<td>{props.temperature2 && <p>{props.temperature2}&#x2109;</p>}</td>
			      			<td>{props.description2 && <p>{props.description2.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			      			<td>{props.icon2 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon2 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date3 && <p>{moment(props.date3).format('dddd')}</p>}</td>
			    			<td>{props.date3 && <p>{moment(props.date3).format('ll')}</p>}</td>
			      			<td>{props.date3 && <p>{moment(props.date3).format('h A')}</p>}</td>
			      			<td>{props.temperature3 && <p>{props.temperature3}&#x2109;</p>}</td>
			      			<td>{props.description3 && <p>{props.description3.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			      			<td>{props.icon3 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon3 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date4 && <p>{moment(props.date4).format('dddd')}</p>}</td>
			    			<td>{props.date4 && <p>{moment(props.date4).format('ll')}</p>}</td>
			      			<td>{props.date4 && <p>{moment(props.date4).format('h A')}</p>}</td>
			      			<td>{props.temperature4 && <p>{props.temperature4}&#x2109;</p>}</td>
			      			<td>{props.description4 && <p>{props.description4.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon4 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon4 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date5 && <p>{moment(props.date5).format('dddd')}</p>}</td>
			    			<td>{props.date5 && <p>{moment(props.date5).format('ll')}</p>}</td>
			      			<td>{props.date5 && <p>{moment(props.date5).format('h A')}</p>}</td>
			      			<td>{props.temperature5 && <p>{props.temperature5}&#x2109;</p>}</td>
			      			<td>{props.description5 && <p>{props.description5.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon5 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon5 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date6 && <p>{moment(props.date6).format('dddd')}</p>}</td>
			    			<td>{props.date6 && <p>{moment(props.date6).format('ll')}</p>}</td>
			      			<td>{props.date6 && <p>{moment(props.date6).format('h A')}</p>}</td>
			      			<td>{props.temperature6 && <p>{props.temperature6}&#x2109;</p>}</td>
			      			<td>{props.description6 && <p>{props.description6.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			      			<td>{props.icon6 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon6 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date7 && <p>{moment(props.date7).format('dddd')}</p>}</td>
			    			<td>{props.date7 && <p>{moment(props.date7).format('ll')}</p>}</td>
			      			<td>{props.date7 && <p>{moment(props.date7).format('h A')}</p>}</td>
			      			<td>{props.temperature7 && <p>{props.temperature7}&#x2109;</p>}</td>
			      			<td>{props.description7 && <p>{props.description7.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			      			<td>{props.icon7 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon7 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date8 && <p>{moment(props.date8).format('dddd')}</p>}</td>
			    			<td>{props.date8 && <p>{moment(props.date8).format('ll')}</p>}</td>
			      			<td>{props.date8 && <p>{moment(props.date8).format('h A')}</p>}</td>
			      			<td>{props.temperature8 && <p>{props.temperature8}&#x2109;</p>}</td>
			      			<td>{props.description8 && <p>{props.description8.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			      			<td>{props.icon8 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon8 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date9 && <p>{moment(props.date9).format('dddd')}</p>}</td>
			    			<td>{props.date9 && <p>{moment(props.date9).format('ll')}</p>}</td>
			      			<td>{props.date9 && <p>{moment(props.date9).format('h A')}</p>}</td>
			      			<td>{props.temperature9 && <p>{props.temperature9}&#x2109;</p>}</td>
			      			<td>{props.description9 && <p>{props.description9.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			      			<td>{props.icon9 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon9 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date10 && <p>{moment(props.date10).format('dddd')}</p>}</td>
			    			<td>{props.date10 && <p>{moment(props.date10).format('ll')}</p>}</td>
			      			<td>{props.date10 && <p>{moment(props.date10).format('h A')}</p>}</td>
			      			<td>{props.temperature10 && <p>{props.temperature10}&#x2109;</p>}</td>
			      			<td>{props.description10 && <p>{props.description10.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon10 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon10 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date11 && <p>{moment(props.date11).format('dddd')}</p>}</td>
			    			<td>{props.date11 && <p>{moment(props.date11).format('ll')}</p>}</td>
			      			<td>{props.date11 && <p>{moment(props.date11).format('h A')}</p>}</td>
			      			<td>{props.temperature11 && <p>{props.temperature11}&#x2109;</p>}</td>
			      			<td>{props.description11 && <p>{props.description11.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon11 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon11 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date12 && <p>{moment(props.date12).format('dddd')}</p>}</td>
			    			<td>{props.date12 && <p>{moment(props.date12).format('ll')}</p>}</td>
			      			<td>{props.date12 && <p>{moment(props.date12).format('h A')}</p>}</td>
			      			<td>{props.temperature12 && <p>{props.temperature12}&#x2109;</p>}</td>
			      			<td>{props.description12 && <p>{props.description12.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon12 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon12 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date13 && <p>{moment(props.date13).format('dddd')}</p>}</td>
			    			<td>{props.date13 && <p>{moment(props.date13).format('ll')}</p>}</td>
			      			<td>{props.date13 && <p>{moment(props.date13).format('h A')}</p>}</td>
			      			<td>{props.temperature13 && <p>{props.temperature13}&#x2109;</p>}</td>
			      			<td>{props.description13 && <p>{props.description13.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon13 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon13 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date14 && <p>{moment(props.date14).format('dddd')}</p>}</td>
			    			<td>{props.date14 && <p>{moment(props.date14).format('ll')}</p>}</td>
			      			<td>{props.date14 && <p>{moment(props.date14).format('h A')}</p>}</td>
			      			<td>{props.temperature14 && <p>{props.temperature14}&#x2109;</p>}</td>
			      			<td>{props.description14 && <p>{props.description14.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon14 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon14 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date15 && <p>{moment(props.date15).format('dddd')}</p>}</td>
			    			<td>{props.date15 && <p>{moment(props.date15).format('ll')}</p>}</td>
			      			<td>{props.date15 && <p>{moment(props.date15).format('h A')}</p>}</td>
			      			<td>{props.temperature15 && <p>{props.temperature15}&#x2109;</p>}</td>
			      			<td>{props.description15 && <p>{props.description15.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon15 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon15 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date16 && <p>{moment(props.date16).format('dddd')}</p>}</td>
			    			<td>{props.date16 && <p>{moment(props.date16).format('ll')}</p>}</td>
			      			<td>{props.date16 && <p>{moment(props.date16).format('h A')}</p>}</td>
			      			<td>{props.temperature16 && <p>{props.temperature16}&#x2109;</p>}</td>
			      			<td>{props.description16 && <p>{props.description16.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon16 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon16 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date17 && <p>{moment(props.date17).format('dddd')}</p>}</td>
			    			<td>{props.date17 && <p>{moment(props.date17).format('ll')}</p>}</td>
			      			<td>{props.date17 && <p>{moment(props.date17).format('h A')}</p>}</td>
			      			<td>{props.temperature17 && <p>{props.temperature17}&#x2109;</p>}</td>
			      			<td>{props.description17 && <p>{props.description17.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon17 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon17 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date18 && <p>{moment(props.date18).format('dddd')}</p>}</td>
			    			<td>{props.date18 && <p>{moment(props.date18).format('ll')}</p>}</td>
			      			<td>{props.date18 && <p>{moment(props.date18).format('h A')}</p>}</td>
			      			<td>{props.temperature18 && <p>{props.temperature18}&#x2109;</p>}</td>
			      			<td>{props.description18 && <p>{props.description18.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon18 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon18 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date19 && <p>{moment(props.date19).format('dddd')}</p>}</td>
			    			<td>{props.date19 && <p>{moment(props.date19).format('ll')}</p>}</td>
			      			<td>{props.date19 && <p>{moment(props.date19).format('h A')}</p>}</td>
			      			<td>{props.temperature19 && <p>{props.temperature19}&#x2109;</p>}</td>
			      			<td>{props.description19 && <p>{props.description19.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon19 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon19 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date20 && <p>{moment(props.date20).format('dddd')}</p>}</td>
			    			<td>{props.date20 && <p>{moment(props.date20).format('ll')}</p>}</td>
			      			<td>{props.date20 && <p>{moment(props.date20).format('h A')}</p>}</td>
			      			<td>{props.temperature20 && <p>{props.temperature20}&#x2109;</p>}</td>
			      			<td>{props.description20 && <p>{props.description20.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon20 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon20 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date21 && <p>{moment(props.date21).format('dddd')}</p>}</td>
			    			<td>{props.date21 && <p>{moment(props.date21).format('ll')}</p>}</td>
			      			<td>{props.date21 && <p>{moment(props.date21).format('h A')}</p>}</td>
			      			<td>{props.temperature21 && <p>{props.temperature21}&#x2109;</p>}</td>
			      			<td>{props.description21 && <p>{props.description21.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			      			<td>{props.icon21 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon21 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date22 && <p>{moment(props.date22).format('dddd')}</p>}</td>
			    			<td>{props.date22 && <p>{moment(props.date22).format('ll')}</p>}</td>
			      			<td>{props.date22 && <p>{moment(props.date22).format('h A')}</p>}</td>
			      			<td>{props.temperature22 && <p>{props.temperature22}&#x2109;</p>}</td>
			      			<td>{props.description22 && <p>{props.description22.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon22 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon22 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date23 && <p>{moment(props.date23).format('dddd')}</p>}</td>
			    			<td>{props.date23 && <p>{moment(props.date23).format('ll')}</p>}</td>
			      			<td>{props.date23 && <p>{moment(props.date23).format('h A')}</p>}</td>
			      			<td>{props.temperature23 && <p>{props.temperature23}&#x2109;</p>}</td>
			      			<td>{props.description23 && <p>{props.description23.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon23 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon23 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date24 && <p>{moment(props.date24).format('dddd')}</p>}</td>
			    			<td>{props.date24 && <p>{moment(props.date24).format('ll')}</p>}</td>
			      			<td>{props.date24 && <p>{moment(props.date24).format('h A')}</p>}</td>
			      			<td>{props.temperature24 && <p>{props.temperature24}&#x2109;</p>}</td>
			      			<td>{props.description24 && <p>{props.description24.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon24 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon24 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date25 && <p>{moment(props.date25).format('dddd')}</p>}</td>
			    			<td>{props.date25 && <p>{moment(props.date25).format('ll')}</p>}</td>
			      			<td>{props.date25 && <p>{moment(props.date25).format('h A')}</p>}</td>
			      			<td>{props.temperature25 && <p>{props.temperature25}&#x2109;</p>}</td>
			      			<td>{props.description25 && <p>{props.description25.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon25 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon25 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date26 && <p>{moment(props.date26).format('dddd')}</p>}</td>
			    			<td>{props.date26 && <p>{moment(props.date26).format('ll')}</p>}</td>
			      			<td>{props.date26 && <p>{moment(props.date26).format('h A')}</p>}</td>
			      			<td>{props.temperature26 && <p>{props.temperature26}&#x2109;</p>}</td>
			      			<td>{props.description26 && <p>{props.description26.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon26 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon26 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date27 && <p>{moment(props.date27).format('dddd')}</p>}</td>
			    			<td>{props.date27 && <p>{moment(props.date27).format('ll')}</p>}</td>
			      			<td>{props.date27 && <p>{moment(props.date27).format('h A')}</p>}</td>
			      			<td>{props.temperature27 && <p>{props.temperature27}&#x2109;</p>}</td>
			      			<td>{props.description27 && <p>{props.description27.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon27 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon27 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date28 && <p>{moment(props.date28).format('dddd')}</p>}</td>
			    			<td>{props.date28 && <p>{moment(props.date28).format('ll')}</p>}</td>
			      			<td>{props.date28 && <p>{moment(props.date28).format('h A')}</p>}</td>
			      			<td>{props.temperature28 && <p>{props.temperature28}&#x2109;</p>}</td>
			      			<td>{props.description28 && <p>{props.description28.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon28 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon28 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date29 && <p>{moment(props.date29).format('dddd')}</p>}</td>
			    			<td>{props.date29 && <p>{moment(props.date29).format('ll')}</p>}</td>
			      			<td>{props.date29 && <p>{moment(props.date29).format('h A')}</p>}</td>
			      			<td>{props.temperature29 && <p>{props.temperature29}&#x2109;</p>}</td>
			      			<td>{props.description29 && <p>{props.description29.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon29 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon29 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date30 && <p>{moment(props.date30).format('dddd')}</p>}</td>
			    			<td>{props.date30 && <p>{moment(props.date30).format('ll')}</p>}</td>
			      			<td>{props.date30 && <p>{moment(props.date30).format('h A')}</p>}</td>
			      			<td>{props.temperature30 && <p>{props.temperature30}&#x2109;</p>}</td>
			      			<td>{props.description30 && <p>{props.description30.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon30 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon30 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date31 && <p>{moment(props.date31).format('dddd')}</p>}</td>
			    			<td>{props.date31 && <p>{moment(props.date31).format('ll')}</p>}</td>
			      			<td>{props.date31 && <p>{moment(props.date31).format('h A')}</p>}</td>
			      			<td>{props.temperature31 && <p>{props.temperature31}&#x2109;</p>}</td>
			      			<td>{props.description31 && <p>{props.description31.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon31 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon31 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date32 && <p>{moment(props.date32).format('dddd')}</p>}</td>
			    			<td>{props.date32 && <p>{moment(props.date32).format('ll')}</p>}</td>
			      			<td>{props.date32 && <p>{moment(props.date32).format('h A')}</p>}</td>
			      			<td>{props.temperature32 && <p>{props.temperature32}&#x2109;</p>}</td>
			      			<td>{props.description32 && <p>{props.description32.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon32 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon32 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date33 && <p>{moment(props.date33).format('dddd')}</p>}</td>
			    			<td>{props.date33 && <p>{moment(props.date33).format('ll')}</p>}</td>
			      			<td>{props.date33 && <p>{moment(props.date33).format('h A')}</p>}</td>
			      			<td>{props.temperature33 && <p>{props.temperature33}&#x2109;</p>}</td>
			      			<td>{props.description33 && <p>{props.description33.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon33 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon33 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date34 && <p>{moment(props.date34).format('dddd')}</p>}</td>
			    			<td>{props.date34 && <p>{moment(props.date34).format('ll')}</p>}</td>
			      			<td>{props.date34 && <p>{moment(props.date34).format('h A')}</p>}</td>
			      			<td>{props.temperature34 && <p>{props.temperature34}&#x2109;</p>}</td>
			      			<td>{props.description34 && <p>{props.description34.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon34 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon34 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date35 && <p>{moment(props.date35).format('dddd')}</p>}</td>
			    			<td>{props.date35 && <p>{moment(props.date35).format('ll')}</p>}</td>
			      			<td>{props.date35 && <p>{moment(props.date35).format('h A')}</p>}</td>
			      			<td>{props.temperature35 && <p>{props.temperature35}&#x2109;</p>}</td>
			      			<td>{props.description35 && <p>{props.description35.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon35 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon35 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date36 && <p>{moment(props.date36).format('dddd')}</p>}</td>
			    			<td>{props.date36 && <p>{moment(props.date36).format('ll')}</p>}</td>
			      			<td>{props.date36 && <p>{moment(props.date36).format('h A')}</p>}</td>
			      			<td>{props.temperature36 && <p>{props.temperature36}&#x2109;</p>}</td>
			      			<td>{props.description36 && <p>{props.description36.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon36 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon36 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date37 && <p>{moment(props.date37).format('dddd')}</p>}</td>
			    			<td>{props.date37 && <p>{moment(props.date37).format('ll')}</p>}</td>
			      			<td>{props.date37 && <p>{moment(props.date37).format('h A')}</p>}</td>
			      			<td>{props.temperature37 && <p>{props.temperature37}&#x2109;</p>}</td>
			      			<td>{props.description37 && <p>{props.description37.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon37 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon37 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date38 && <p>{moment(props.date38).format('dddd')}</p>}</td>
			    			<td>{props.date38 && <p>{moment(props.date38).format('ll')}</p>}</td>
			      			<td>{props.date38 && <p>{moment(props.date38).format('h A')}</p>}</td>
			      			<td>{props.temperature38 && <p>{props.temperature38}&#x2109;</p>}</td>
			      			<td>{props.description38 && <p>{props.description38.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon38 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon38 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			    		<tr>
			    			<td>{props.date39 && <p>{moment(props.date39).format('dddd')}</p>}</td>
			    			<td>{props.date39 && <p>{moment(props.date39).format('ll')}</p>}</td>
			      			<td>{props.date39 && <p>{moment(props.date39).format('h A')}</p>}</td>
			      			<td>{props.temperature39 && <p>{props.temperature39}&#x2109;</p>}</td>
			      			<td>{props.description39 && <p>{props.description39.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}</td>
			    			<td>{props.icon39 && <img className = "imgStyle" src={"http://openweathermap.org/img/w/" + props.icon39 + ".png"} alt="Weather Icon" />}</td>
			    		</tr>
			  		</tbody>
				</table>
			}</div>
		</div>
		
	</Styles>   
);

export default ForecastTable;