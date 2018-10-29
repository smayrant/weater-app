import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'c4aaa847c0daafc09f71a654dfdf18a8';

class App extends Component {

  // function to obtain weather info from the Open Weather Map API
  getWeather = async (e) => {
    e.preventDefault();
    console.log(e)
    // store the value of the city that was typed in the 'city' input field
    const city = e.target.elements.city.value;

    // store the value of the city that was typed in the 'country' input field
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    // convert the returned data into JSON
    const data = await api_call.json();

    console.log(data)
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    )
  }
}

export default App