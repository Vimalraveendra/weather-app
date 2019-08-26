import React from 'react';
import './Weather.css';

const Weather = ({temperature,humidity,city,country,description,error}) =>{
	return(
        <React.Fragment>
          <div className='info'>
            {city && country &&
              <p>Location: <span> {city},{country} </span></p>
            }
            {temperature &&
              <p>Temperature: <span>{temperature} </span></p>
            }
            {humidity &&
              <p>Humidity: <span> {humidity} </span></p>
            }
            {description &&
              <p>Weather: <span>{description} </span></p>
            }
            {error && 
              <p> {error}</p>
            }

          </div>

        </React.Fragment>

		)
}

export default Weather;