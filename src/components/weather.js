import React from 'react';

export function getCardinal(angle) {

  const degreePerDirection = 360 / 8;

  const offsetAngle = angle + degreePerDirection / 2;

  return (offsetAngle >= 0 * degreePerDirection && offsetAngle < 1 * degreePerDirection) ? "North"
    : (offsetAngle >= 1 * degreePerDirection && offsetAngle < 2 * degreePerDirection) ? "Northeast"
      : (offsetAngle >= 2 * degreePerDirection && offsetAngle < 3 * degreePerDirection) ? "East"
        : (offsetAngle >= 3 * degreePerDirection && offsetAngle < 4 * degreePerDirection) ? "Southeast"
          : (offsetAngle >= 4 * degreePerDirection && offsetAngle < 5 * degreePerDirection) ? "South"
            : (offsetAngle >= 5 * degreePerDirection && offsetAngle < 6 * degreePerDirection) ? "Southwest"
              : (offsetAngle >= 6 * degreePerDirection && offsetAngle < 7 * degreePerDirection) ? "West"
                : "Northwest";
}

const Weather = props => (
    
  <div>{props.city && props.country &&
    <div class="card bg-dark text-white">
      <br/>
      {props.icon && <img class="card-img-top" src={"http://openweathermap.org/img/w/" + props.icon + ".png"} alt="Weather Icon" />}
      <div class="card-body">
        {props.city && props.country && <h5 class="card-title">{props.city}, {props.country}</h5>}
        {props.temperature && <p class="card-text">Temperature: {props.temperature}&#x2109;</p>}
        {props.feelsLike && <p class="card-text">Feels Like: {props.feelsLike}&#x2109;</p>}
        {props.humidity && <p class="card-text">Humidity: {props.humidity}%</p>}
        {props.description && <p class="card-text">{props.description.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}</p>}     
        {props.windSpeed && <p class="card-text">Wind: {getCardinal(props.windDirection)} @ {props.windSpeed} MPH</p>}      
        {props.sunrise && <p class="card-text">Sunrise: {props.sunrise}</p>}      
        {props.sunset && <p class="card-text">Sunset: {props.sunset}</p>}
        {props.error && <p>{props.error}</p>}
      </div>
    </div>
  }</div>
  
);

export default Weather;