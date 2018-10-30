import React from 'react';

const Weather = props => (
    <div>
        {/* information is only displayed on the page once props are not null */}
        {props.city && props.country && <p className="weather-key">Location: <span className="weather-value">{props.city}, {props.country}</span></p>}

        {props.temperature && <p className="weather-key">Temperature: <span className="weather-value">{props.temperature}</span></p>}

        {props.humidity && <p className="weather-key">Humidity: <span className="weather-value">{props.humidity}</span></p>}

        {props.description && <p className="weather-key">Condition: <span className="weather-value">{props.description}</span></p>}

        {props.error && <h3><span>{props.error}</span></h3>}
    </div>
)


export default Weather