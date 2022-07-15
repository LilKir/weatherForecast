import { Component } from "react";

import MenuBar from "../menuBar/menuBar";
import WeatherCastCard from "../weatherCastCard/weatherCastCard";

import "./app.scss";

class App extends Component {
  state = {
    searchWeather: "Санкт-Петербург",
  };

  onWeatherSearch = (city) => {
    this.setState({
      searchWeather: city,
    });
  };

  render() {
    return (
      <div className="container">
        <MenuBar onWeatherSearch={this.onWeatherSearch} />
        <WeatherCastCard cityName={this.state.searchWeather} />
        <div className="bottom">
          Прогноз погоды предоставлен сервисом{" "}
          <a href="https://openweathermap.org/">OpenWeather</a>
        </div>
        <div className="version">v.0.1.10</div>
      </div>
    );
  }
}

export default App;
