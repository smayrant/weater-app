import React from 'react';

const Weather = props => (
    <div>
        {/* information is only displayed on the page once props are not null */}
        {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}

        {props.temperature && <p>Temperature: {props.temperature}</p>}

        {props.humidity && <p>Humidity: {props.humidity}</p>}

        {props.description && <p>Condition: {props.description}</p>}

        {props.error && <h3>{props.error}</h3>}
    </div>
)


export default Weather