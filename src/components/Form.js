import React from 'react';

const Form = props =>
    (
        <div>
            <form onSubmit={props.getWeather}>
                <input className="input" type="text" name="city" placeholder="Please enter  a city" />
                <input className="input" type="text" name="country" placeholder="Please enter  a country" />
                <button className="btn btn-primary">Get Weather</button>
            </form>
        </div>
    )


export default Form;