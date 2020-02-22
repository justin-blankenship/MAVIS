import React from 'react';
import ForecastTitles from './components/forecastTitles';
import ForecastCityForm from './components/forecastCityForm';
import ForecastZipForm from './components/forecastZipForm';
import ForecastTable from '././components/forecastTable';

const API_KEY = process.env.REACT_APP_SECRET_KEY;

class Forecast extends React.Component {

	state = {
		city: undefined,
        country: undefined,
		date: undefined,
        temperature: undefined,
    	description: undefined,
        icon: undefined,
        error: undefined
    }

    getForecast = async (e) => {
    	e.preventDefault();
    	const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
        const data = await api_call.json();

        if (city && country) {
        	console.log(data);
        	this.setState({
        		city: data.city.name,
                country: data.city.country,
        		date0: data.list[0].dt_txt,
        		date1: data.list[1].dt_txt,
        		date2: data.list[2].dt_txt,
        		date3: data.list[3].dt_txt,
        		date4: data.list[4].dt_txt,
        		date5: data.list[5].dt_txt,
        		date6: data.list[6].dt_txt,
        		date7: data.list[7].dt_txt,
        		date8: data.list[8].dt_txt,
        		date9: data.list[9].dt_txt,
        		date10: data.list[10].dt_txt,
        		date11: data.list[11].dt_txt,
        		date12: data.list[12].dt_txt,
        		date13: data.list[13].dt_txt,
        		date14: data.list[14].dt_txt,
        		date15: data.list[15].dt_txt,
        		date16: data.list[16].dt_txt,
        		date17: data.list[17].dt_txt,
        		date18: data.list[18].dt_txt,
        		date19: data.list[19].dt_txt,
        		date20: data.list[20].dt_txt,
        		date21: data.list[21].dt_txt,
        		date22: data.list[22].dt_txt,
        		date23: data.list[23].dt_txt,
        		date24: data.list[24].dt_txt,
        		date25: data.list[25].dt_txt,
        		date26: data.list[26].dt_txt,
        		date27: data.list[27].dt_txt,
        		date28: data.list[28].dt_txt,
        		date29: data.list[29].dt_txt,
        		date30: data.list[30].dt_txt,
        		date31: data.list[31].dt_txt,
        		date32: data.list[32].dt_txt,
        		date33: data.list[33].dt_txt,
        		date34: data.list[34].dt_txt,
        		date35: data.list[35].dt_txt,
        		date36: data.list[36].dt_txt,
        		date37: data.list[37].dt_txt,
        		date38: data.list[38].dt_txt,
        		date39: data.list[39].dt_txt,
                temperature0: Math.round(data.list[0].main.temp),
                temperature1: Math.round(data.list[1].main.temp),
                temperature2: Math.round(data.list[2].main.temp), 
                temperature3: Math.round(data.list[3].main.temp),
                temperature4: Math.round(data.list[4].main.temp),
                temperature5: Math.round(data.list[5].main.temp), 
                temperature6: Math.round(data.list[6].main.temp),
                temperature7: Math.round(data.list[7].main.temp),
                temperature8: Math.round(data.list[8].main.temp),
                temperature9: Math.round(data.list[9].main.temp),
                temperature10: Math.round(data.list[10].main.temp),
                temperature11: Math.round(data.list[11].main.temp),
                temperature12: Math.round(data.list[12].main.temp), 
                temperature13: Math.round(data.list[13].main.temp),
                temperature14: Math.round(data.list[14].main.temp),
                temperature15: Math.round(data.list[15].main.temp), 
                temperature16: Math.round(data.list[16].main.temp),
                temperature17: Math.round(data.list[17].main.temp),
                temperature18: Math.round(data.list[18].main.temp),
                temperature19: Math.round(data.list[19].main.temp),
                temperature20: Math.round(data.list[20].main.temp),
                temperature21: Math.round(data.list[21].main.temp),
                temperature22: Math.round(data.list[22].main.temp), 
                temperature23: Math.round(data.list[23].main.temp),
                temperature24: Math.round(data.list[24].main.temp),
                temperature25: Math.round(data.list[25].main.temp), 
                temperature26: Math.round(data.list[26].main.temp),
                temperature27: Math.round(data.list[27].main.temp),
                temperature28: Math.round(data.list[28].main.temp),
                temperature29: Math.round(data.list[29].main.temp),
                temperature30: Math.round(data.list[30].main.temp),
                temperature31: Math.round(data.list[31].main.temp),
                temperature32: Math.round(data.list[32].main.temp), 
                temperature33: Math.round(data.list[33].main.temp),
                temperature34: Math.round(data.list[34].main.temp),
                temperature35: Math.round(data.list[35].main.temp), 
                temperature36: Math.round(data.list[36].main.temp),
                temperature37: Math.round(data.list[37].main.temp),
                temperature38: Math.round(data.list[38].main.temp),
                temperature39: Math.round(data.list[39].main.temp),                
                description0: data.list[0].weather[0].description,
                description1: data.list[1].weather[0].description,
                description2: data.list[2].weather[0].description,
                description3: data.list[3].weather[0].description,
                description4: data.list[4].weather[0].description,
                description5: data.list[5].weather[0].description,
                description6: data.list[6].weather[0].description,
                description7: data.list[7].weather[0].description,
                description8: data.list[8].weather[0].description,
                description9: data.list[9].weather[0].description,
                description10: data.list[10].weather[0].description,
                description11: data.list[11].weather[0].description,
                description12: data.list[12].weather[0].description,
                description13: data.list[13].weather[0].description,
                description14: data.list[14].weather[0].description,
                description15: data.list[15].weather[0].description,
                description16: data.list[16].weather[0].description,
                description17: data.list[17].weather[0].description,
                description18: data.list[18].weather[0].description,
                description19: data.list[19].weather[0].description,
                description20: data.list[20].weather[0].description,
                description21: data.list[21].weather[0].description,
                description22: data.list[22].weather[0].description,
                description23: data.list[23].weather[0].description,
                description24: data.list[24].weather[0].description,
                description25: data.list[25].weather[0].description,
                description26: data.list[26].weather[0].description,
                description27: data.list[27].weather[0].description,
                description28: data.list[28].weather[0].description,
                description29: data.list[29].weather[0].description,
                description30: data.list[30].weather[0].description,
                description31: data.list[31].weather[0].description,
                description32: data.list[32].weather[0].description,
                description33: data.list[33].weather[0].description,
                description34: data.list[34].weather[0].description,
                description35: data.list[35].weather[0].description,
                description36: data.list[36].weather[0].description,
                description37: data.list[37].weather[0].description,
                description38: data.list[38].weather[0].description,
                description39: data.list[39].weather[0].description,
                icon0: data.list[0].weather[0].icon,
                icon1: data.list[1].weather[0].icon,             
                icon2: data.list[2].weather[0].icon,
                icon3: data.list[3].weather[0].icon,
                icon4: data.list[4].weather[0].icon,
                icon5: data.list[5].weather[0].icon,
                icon6: data.list[6].weather[0].icon,
                icon7: data.list[7].weather[0].icon,
                icon8: data.list[8].weather[0].icon,
                icon9: data.list[9].weather[0].icon,
                icon10: data.list[10].weather[0].icon,
                icon11: data.list[11].weather[0].icon,             
                icon12: data.list[12].weather[0].icon,
                icon13: data.list[13].weather[0].icon,
                icon14: data.list[14].weather[0].icon,
                icon15: data.list[15].weather[0].icon,
                icon16: data.list[16].weather[0].icon,
                icon17: data.list[17].weather[0].icon,
                icon18: data.list[18].weather[0].icon,
                icon19: data.list[19].weather[0].icon,
                icon20: data.list[20].weather[0].icon,
                icon21: data.list[21].weather[0].icon,             
                icon22: data.list[22].weather[0].icon,
                icon23: data.list[23].weather[0].icon,
                icon24: data.list[24].weather[0].icon,
                icon25: data.list[25].weather[0].icon,
                icon26: data.list[26].weather[0].icon,
                icon27: data.list[27].weather[0].icon,
                icon28: data.list[28].weather[0].icon,
                icon29: data.list[29].weather[0].icon,
                icon30: data.list[30].weather[0].icon,
                icon31: data.list[31].weather[0].icon,             
                icon32: data.list[32].weather[0].icon,
                icon33: data.list[33].weather[0].icon,
                icon34: data.list[34].weather[0].icon,
                icon35: data.list[35].weather[0].icon,
                icon36: data.list[36].weather[0].icon,
                icon37: data.list[37].weather[0].icon,
                icon38: data.list[38].weather[0].icon,
                icon39: data.list[39].weather[0].icon,
                error: ""
        });
    	} else {
        	this.setState({
            	temperature: undefined,
            	city: undefined,
            	country: undefined,
            	description: undefined,
                icon: undefined,
            	error: "Please enter the value."
        	});
    	}
	}

    getForecastByZip = async (e) => {
        e.preventDefault();
        const zip = e.target.elements.zip.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip},${country}&APPID=${API_KEY}&units=imperial`);
        const data = await api_call.json();

        if (zip && country) {
            console.log(data);
            this.setState({
                city: data.city.name,
                country: data.city.country,
                date0: data.list[0].dt_txt,
                date1: data.list[1].dt_txt,
                date2: data.list[2].dt_txt,
                date3: data.list[3].dt_txt,
                date4: data.list[4].dt_txt,
                date5: data.list[5].dt_txt,
                date6: data.list[6].dt_txt,
                date7: data.list[7].dt_txt,
                date8: data.list[8].dt_txt,
                date9: data.list[9].dt_txt,
                date10: data.list[10].dt_txt,
                date11: data.list[11].dt_txt,
                date12: data.list[12].dt_txt,
                date13: data.list[13].dt_txt,
                date14: data.list[14].dt_txt,
                date15: data.list[15].dt_txt,
                date16: data.list[16].dt_txt,
                date17: data.list[17].dt_txt,
                date18: data.list[18].dt_txt,
                date19: data.list[19].dt_txt,
                date20: data.list[20].dt_txt,
                date21: data.list[21].dt_txt,
                date22: data.list[22].dt_txt,
                date23: data.list[23].dt_txt,
                date24: data.list[24].dt_txt,
                date25: data.list[25].dt_txt,
                date26: data.list[26].dt_txt,
                date27: data.list[27].dt_txt,
                date28: data.list[28].dt_txt,
                date29: data.list[29].dt_txt,
                date30: data.list[30].dt_txt,
                date31: data.list[31].dt_txt,
                date32: data.list[32].dt_txt,
                date33: data.list[33].dt_txt,
                date34: data.list[34].dt_txt,
                date35: data.list[35].dt_txt,
                date36: data.list[36].dt_txt,
                date37: data.list[37].dt_txt,
                date38: data.list[38].dt_txt,
                date39: data.list[39].dt_txt,
                temperature0: Math.round(data.list[0].main.temp),
                temperature1: Math.round(data.list[1].main.temp),
                temperature2: Math.round(data.list[2].main.temp), 
                temperature3: Math.round(data.list[3].main.temp),
                temperature4: Math.round(data.list[4].main.temp),
                temperature5: Math.round(data.list[5].main.temp), 
                temperature6: Math.round(data.list[6].main.temp),
                temperature7: Math.round(data.list[7].main.temp),
                temperature8: Math.round(data.list[8].main.temp),
                temperature9: Math.round(data.list[9].main.temp),
                temperature10: Math.round(data.list[10].main.temp),
                temperature11: Math.round(data.list[11].main.temp),
                temperature12: Math.round(data.list[12].main.temp), 
                temperature13: Math.round(data.list[13].main.temp),
                temperature14: Math.round(data.list[14].main.temp),
                temperature15: Math.round(data.list[15].main.temp), 
                temperature16: Math.round(data.list[16].main.temp),
                temperature17: Math.round(data.list[17].main.temp),
                temperature18: Math.round(data.list[18].main.temp),
                temperature19: Math.round(data.list[19].main.temp),
                temperature20: Math.round(data.list[20].main.temp),
                temperature21: Math.round(data.list[21].main.temp),
                temperature22: Math.round(data.list[22].main.temp), 
                temperature23: Math.round(data.list[23].main.temp),
                temperature24: Math.round(data.list[24].main.temp),
                temperature25: Math.round(data.list[25].main.temp), 
                temperature26: Math.round(data.list[26].main.temp),
                temperature27: Math.round(data.list[27].main.temp),
                temperature28: Math.round(data.list[28].main.temp),
                temperature29: Math.round(data.list[29].main.temp),
                temperature30: Math.round(data.list[30].main.temp),
                temperature31: Math.round(data.list[31].main.temp),
                temperature32: Math.round(data.list[32].main.temp), 
                temperature33: Math.round(data.list[33].main.temp),
                temperature34: Math.round(data.list[34].main.temp),
                temperature35: Math.round(data.list[35].main.temp), 
                temperature36: Math.round(data.list[36].main.temp),
                temperature37: Math.round(data.list[37].main.temp),
                temperature38: Math.round(data.list[38].main.temp),
                temperature39: Math.round(data.list[39].main.temp),                
                description0: data.list[0].weather[0].description,
                description1: data.list[1].weather[0].description,
                description2: data.list[2].weather[0].description,
                description3: data.list[3].weather[0].description,
                description4: data.list[4].weather[0].description,
                description5: data.list[5].weather[0].description,
                description6: data.list[6].weather[0].description,
                description7: data.list[7].weather[0].description,
                description8: data.list[8].weather[0].description,
                description9: data.list[9].weather[0].description,
                description10: data.list[10].weather[0].description,
                description11: data.list[11].weather[0].description,
                description12: data.list[12].weather[0].description,
                description13: data.list[13].weather[0].description,
                description14: data.list[14].weather[0].description,
                description15: data.list[15].weather[0].description,
                description16: data.list[16].weather[0].description,
                description17: data.list[17].weather[0].description,
                description18: data.list[18].weather[0].description,
                description19: data.list[19].weather[0].description,
                description20: data.list[20].weather[0].description,
                description21: data.list[21].weather[0].description,
                description22: data.list[22].weather[0].description,
                description23: data.list[23].weather[0].description,
                description24: data.list[24].weather[0].description,
                description25: data.list[25].weather[0].description,
                description26: data.list[26].weather[0].description,
                description27: data.list[27].weather[0].description,
                description28: data.list[28].weather[0].description,
                description29: data.list[29].weather[0].description,
                description30: data.list[30].weather[0].description,
                description31: data.list[31].weather[0].description,
                description32: data.list[32].weather[0].description,
                description33: data.list[33].weather[0].description,
                description34: data.list[34].weather[0].description,
                description35: data.list[35].weather[0].description,
                description36: data.list[36].weather[0].description,
                description37: data.list[37].weather[0].description,
                description38: data.list[38].weather[0].description,
                description39: data.list[39].weather[0].description,
                icon0: data.list[0].weather[0].icon,
                icon1: data.list[1].weather[0].icon,             
                icon2: data.list[2].weather[0].icon,
                icon3: data.list[3].weather[0].icon,
                icon4: data.list[4].weather[0].icon,
                icon5: data.list[5].weather[0].icon,
                icon6: data.list[6].weather[0].icon,
                icon7: data.list[7].weather[0].icon,
                icon8: data.list[8].weather[0].icon,
                icon9: data.list[9].weather[0].icon,
                icon10: data.list[10].weather[0].icon,
                icon11: data.list[11].weather[0].icon,             
                icon12: data.list[12].weather[0].icon,
                icon13: data.list[13].weather[0].icon,
                icon14: data.list[14].weather[0].icon,
                icon15: data.list[15].weather[0].icon,
                icon16: data.list[16].weather[0].icon,
                icon17: data.list[17].weather[0].icon,
                icon18: data.list[18].weather[0].icon,
                icon19: data.list[19].weather[0].icon,
                icon20: data.list[20].weather[0].icon,
                icon21: data.list[21].weather[0].icon,             
                icon22: data.list[22].weather[0].icon,
                icon23: data.list[23].weather[0].icon,
                icon24: data.list[24].weather[0].icon,
                icon25: data.list[25].weather[0].icon,
                icon26: data.list[26].weather[0].icon,
                icon27: data.list[27].weather[0].icon,
                icon28: data.list[28].weather[0].icon,
                icon29: data.list[29].weather[0].icon,
                icon30: data.list[30].weather[0].icon,
                icon31: data.list[31].weather[0].icon,             
                icon32: data.list[32].weather[0].icon,
                icon33: data.list[33].weather[0].icon,
                icon34: data.list[34].weather[0].icon,
                icon35: data.list[35].weather[0].icon,
                icon36: data.list[36].weather[0].icon,
                icon37: data.list[37].weather[0].icon,
                icon38: data.list[38].weather[0].icon,
                icon39: data.list[39].weather[0].icon,        
                error: ""
        });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                description: undefined,
                icon: undefined,
                error: "Please enter the value."
            });
        }
    }

    render() {
        return (
            <React.Fragment>
      
        		<ForecastTitles/>
                <ForecastZipForm getForecast = {this.getForecastByZip}/>
        		<ForecastCityForm getForecast = {this.getForecast}/>                

        		<ForecastTable
        				city={this.state.city}
            			country={this.state.country}   	
            			date0={this.state.date0}
            			temperature0={this.state.temperature0}            			
            			description0={this.state.description0}
                        icon0={this.state.icon0}
        				date1={this.state.date1}
            			temperature1={this.state.temperature1}            			
            			description1={this.state.description1}
                        icon1={this.state.icon1}
            			date2={this.state.date2}
            			temperature2={this.state.temperature2}            			
            			description2={this.state.description2}
                        icon2={this.state.icon2}       	
            			date3={this.state.date3}
            			temperature3={this.state.temperature3}            			
            			description3={this.state.description3}
                        icon3={this.state.icon3}       	
            			date4={this.state.date4}
            			temperature4={this.state.temperature4}            			
            			description4={this.state.description4}
                        icon4={this.state.icon4}     	
            			date5={this.state.date5}
            			temperature5={this.state.temperature5}            			
            			description5={this.state.description5}
                        icon5={this.state.icon5}     	
            			date6={this.state.date6}
            			temperature6={this.state.temperature6}            			
            			description6={this.state.description6}
                        icon6={this.state.icon6}     	
            			date7={this.state.date7}
            			temperature7={this.state.temperature7}            			
            			description7={this.state.description7}
            			icon7={this.state.icon7}
                        date8={this.state.date8}
            			temperature8={this.state.temperature8}            			
            			description8={this.state.description8}
                        icon8={this.state.icon8}
            			date9={this.state.date9}
            			temperature9={this.state.temperature9}            			
            			description9={this.state.description9}
                        icon9={this.state.icon9}
            			date10={this.state.date10}
            			temperature10={this.state.temperature10}            			
            			description10={this.state.description10}
                        icon10={this.state.icon10}      	
            			date11={this.state.date11}
            			temperature11={this.state.temperature11}            			
            			description11={this.state.description11}
                        icon11={this.state.icon11}	
            			date12={this.state.date12}
            			temperature12={this.state.temperature12}            			
            			description12={this.state.description12}
                        icon12={this.state.icon12} 	
            			date13={this.state.date13}
            			temperature13={this.state.temperature13}            			
            			description13={this.state.description13}
                        icon13={this.state.icon13}
            			date14={this.state.date14}
            			temperature14={this.state.temperature14}            			
            			description14={this.state.description14}
                        icon14={this.state.icon14}   	
            			date15={this.state.date15}
            			temperature15={this.state.temperature15}            			
            			description15={this.state.description15}
                        icon15={this.state.icon15}      	
            			date16={this.state.date16}
            			temperature16={this.state.temperature16}            			
            			description16={this.state.description16}
                        icon16={this.state.icon16}       	
            			date17={this.state.date17}
            			temperature17={this.state.temperature17}            			
            			description17={this.state.description17}
                        icon17={this.state.icon17}     	
            			date18={this.state.date18}
            			temperature18={this.state.temperature18}            			
            			description18={this.state.description18}
                        icon18={this.state.icon18}
            			date19={this.state.date19}
            			temperature19={this.state.temperature19}            			
            			description19={this.state.description19}
                        icon19={this.state.icon19}      	
            			date20={this.state.date20}
            			temperature20={this.state.temperature20}            			
            			description20={this.state.description20}
                        icon20={this.state.icon20}
            			date21={this.state.date21}
            			temperature21={this.state.temperature21}            			
            			description21={this.state.description21}
                        icon21={this.state.icon21}   	
            			date22={this.state.date22}
            			temperature22={this.state.temperature22}            			
            			description22={this.state.description22}
                        icon22={this.state.icon22}   	
            			date23={this.state.date23}
            			temperature23={this.state.temperature23}            			
            			description23={this.state.description23}
                        icon23={this.state.icon23}
            			date24={this.state.date24}
            			temperature24={this.state.temperature24}            			
            			description24={this.state.description24}
                        icon24={this.state.icon24}
            			date25={this.state.date25}
            			temperature25={this.state.temperature25}            			
            			description25={this.state.description25}
                        icon25={this.state.icon25}      	
            			date26={this.state.date26}
            			temperature26={this.state.temperature26}            			
            			description26={this.state.description26}
                        icon26={this.state.icon26} 	
            			date27={this.state.date27}
            			temperature27={this.state.temperature27}            			
            			description27={this.state.description27}
                        icon27={this.state.icon27}  	
            			date28={this.state.date28}
            			temperature28={this.state.temperature28}            			
            			description28={this.state.description28}
                        icon28={this.state.icon28}      	
            			date29={this.state.date29}
            			temperature29={this.state.temperature29}            			
            			description29={this.state.description29}
                        icon29={this.state.icon29}
            			date30={this.state.date30}
            			temperature30={this.state.temperature30}            			
            			description30={this.state.description30}
                        icon30={this.state.icon30}      	
            			date31={this.state.date31}
            			temperature31={this.state.temperature31}            			
            			description31={this.state.description31}
                        icon31={this.state.icon31}      	
            			date32={this.state.date32}
            			temperature32={this.state.temperature32}            			
            			description32={this.state.description32}
                        icon32={this.state.icon32}   	
            			date33={this.state.date33}
            			temperature33={this.state.temperature33}            			
            			description33={this.state.description33}
                        icon33={this.state.icon33}	
            			date34={this.state.date34}
            			temperature34={this.state.temperature34}            			
            			description34={this.state.description34}
                        icon34={this.state.icon34} 	
            			date35={this.state.date35}
            			temperature35={this.state.temperature35}            			
            			description35={this.state.description35}
                        icon35={this.state.icon35}      	
            			date36={this.state.date36}
            			temperature36={this.state.temperature36}            			
            			description36={this.state.description36}
                        icon36={this.state.icon36}      	
            			date37={this.state.date37}
            			temperature37={this.state.temperature37}            			
            			description37={this.state.description37}
                        icon37={this.state.icon37}
            			date38={this.state.date38}
            			temperature38={this.state.temperature38}            			
            			description38={this.state.description38}
                        icon38={this.state.icon38}
            			date39={this.state.date39}
            			temperature39={this.state.temperature39}            			
            			description39={this.state.description39}
                        icon39={this.state.icon39}
            			error={this.state.error}
        		/>      		
      		</React.Fragment>
        );
    }
};

export default Forecast;