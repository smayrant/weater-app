import React from 'react';

const Form = props =>
    (
        <div>
            <form onSubmit={props.getWeather}>
                <input className="input" type="text" name="city" placeholder="Enter  a city" />
                <input className="input input2" type="text" name="country" placeholder="Enter  a country" />
                <button className="btn">Get Weather</button>
            </form>
        </div>
    )


export default Form;