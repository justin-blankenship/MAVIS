import React from 'react';
import moment from 'moment';
import Titles from './components/titles';
import CityForm from './components/cityForm';
import ZipForm from './components/zipForm';
import Weather from '././components/weather';

const API_KEY = process.env.REACT_APP_SECRET_KEY;

class Home extends React.Component {

    state = {
        temperature: undefined,
        feelsLike: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        windSpeed: undefined,
        windDirection: undefined,
        sunrise: undefined,
        sunset: undefined,
        icon: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
        const data = await api_call.json();

        if (city && country) {
            console.log(data);
            this.setState({
                temperature: Math.round(data.main.temp),
                feelsLike: Math.round(data.main.feels_like),
                city: data.name,
                country: data.sys.country,
                humidity: Math.round(data.main.humidity),
                description: data.weather[0].description,
                windSpeed: Math.round(data.wind.speed),
                windDirection: Math.round(data.wind.deg),
                sunrise: moment.unix(data.sys.sunrise).format('LT'),
                sunset: moment.unix(data.sys.sunset).format('LT'),
                icon: data.weather[0].icon,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                feelsLike: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                windSpeed: undefined,
                windDirection: undefined,
                sunrise: undefined,
                sunset: undefined,
                icon: undefined,
                error: "Please enter the value."
            });
        }
    }

    getWeatherByZip = async (e) => {
        e.preventDefault();
        const zip = e.target.elements.zip.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&APPID=${API_KEY}&units=imperial`);
        const data = await api_call.json();

        if (zip && country) {
            console.log(data);
            this.setState({
                temperature: Math.round(data.main.temp),
                feelsLike: Math.round(data.main.feels_like),
                city: data.name,
                country: data.sys.country,
                humidity: Math.round(data.main.humidity),
                description: data.weather[0].description,
                windSpeed: Math.round(data.wind.speed),
                windDirection: Math.round(data.wind.deg),
                sunrise: moment.unix(data.sys.sunrise).format('LT'),
                sunset: moment.unix(data.sys.sunset).format('LT'),
                icon: data.weather[0].icon,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                feelsLike: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                windSpeed: undefined,
                windDirection: undefined,
                sunrise: undefined,
                sunset: undefined,
                icon: undefined,
                error: "Please enter the value."
            });
        }
    }

    render() {
        return (
            <React.Fragment>
      
        		<Titles/>

        		<Weather         	
            			temperature={this.state.temperature}
            			feelsLike={this.state.feelsLike}
            			city={this.state.city}
            			country={this.state.country}
            			humidity={this.state.humidity}
            			description={this.state.description}
            			windSpeed={this.state.windSpeed}
            			windDirection={this.state.windDirection}
            			sunrise={this.state.sunrise}
                		sunset={this.state.sunset}
                		icon={this.state.icon}
            			error={this.state.error}
        		/>
     
        		<div>
        			<ZipForm getWeather={this.getWeatherByZip}/>        		
        			
        		</div>
        		
        		<CityForm getWeather={this.getWeather}/>
      		
      		</React.Fragment>
        );
    }
};

export default Home;