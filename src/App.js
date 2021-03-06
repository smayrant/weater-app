import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'c4aaa847c0daafc09f71a654dfdf18a8';

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // function to obtain weather info from the Open Weather Map API
  getWeather = async (e) => {
    e.preventDefault();
    // store the value of the city that was typed in the 'city' input field
    const city = e.target.elements.city.value;

    // store the value of the city that was typed in the 'country' input field
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    // convert the returned data into JSON
    const data = await api_call.json();

    // convert the temperature to fahrenheit
    // data.main.temp = Math.round(data.main.temp * 9 / 5 + 32);

    // only set the state if the city and country input fields aren't empty
    if (city && country) {
      this.setState({
        temperature: data.main.temp = Math.round(data.main.temp * 9 / 5 + 32),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a valid city and the corresponding country's initials"
      });
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-5 title-container">
                  <Titles />
                </div>
                <div className="col-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App