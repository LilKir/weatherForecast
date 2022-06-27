import { Component } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import WeatherService from "../../services/WeatherService";

import "./weatherCastCard.scss";

class WeatherCastCard extends Component {
  state = {
    weather: {},
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.updateWeather();
  }

  componentDidUpdate(prevProps) {
    if (this.props.cityName !== prevProps.cityName) {
      this.updateWeather();
    }
  }

  weatherService = new WeatherService();

  onWeatherLoaded = (weather) => {
    this.setState({ weather, loading: false });
  };

  onWeatherLoading = () => {
    this.setState({
      loading: true,
    });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  onErrorFalse = () => {
    this.setState({ error: false });
  };

  updateWeather = () => {
    const city = this.props.cityName;

    this.onWeatherLoading();
    this.weatherService
      .getWeather(city)
      .then(this.onWeatherLoaded)
      .then(this.onErrorFalse)
      .catch(this.onError);
  };

  render() {
    const { weather, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View weather={weather} /> : null;

    return (
      <div className="card">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const View = ({ weather }) => {
  const { name, temp, description, temp_max, temp_min, icon } = weather;

  return (
    <>
      <h2 className="name-city">{name}</h2>
      <div className="temp-info d-flex">
        <div className="temp">{temp}</div>
        <img className="img-weather" src={icon} alt={icon} />
      </div>
      <div className="description">{description}</div>
      <div className="temp-max-min d-flex">
        <div className="temp-min">Минимальная температура: {temp_min}</div>
        <div className="temp-max">Максимальная температура: {temp_max}</div>
      </div>
    </>
  );
};

export default WeatherCastCard;
