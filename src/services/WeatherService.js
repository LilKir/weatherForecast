class WeatherService {
  _apiBase = "https://api.openweathermap.org/data/2.5/";
  _apiKey = "appid=dfe230e574b53f302bcac849488eafd7";
  getResouserce = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getWeather = async (city) => {
    const res = await this.getResouserce(
      `${this._apiBase}weather?q=${city}&lang=ru&units=metric&${this._apiKey}`
    );
    return this._transformWeather(res);
  };

  _transformWeather = (res) => {
    const ucFirst = (str) => {
      if (!str) return str;

      return str[0].toUpperCase() + str.slice(1);
    };
    return {
      id: res.id,
      name: res.name,
      temp: res.main.temp.toFixed(0),
      feels_like: res.main.feels_like.toFixed(0),
      icon: `http://openweathermap.org/img/wn/${res.weather[0].icon}.png`,
      description: ucFirst(res.weather[0].description),
      temp_max: res.main.temp_max.toFixed(0),
      temp_min: res.main.temp_min.toFixed(0),
    };
  };
}

export default WeatherService;
