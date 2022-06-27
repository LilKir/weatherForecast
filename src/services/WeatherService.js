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
      `${this._apiBase}weather?q=${city}&lang=ru&${this._apiKey}`
    );
    return this._transformWeather(res);
  };

  _transformWeather = (res) => {
    return {
      id: res.id,
      name: res.name,
      temp: Math.floor(res.main.temp - 273.15),
      icon: `http://openweathermap.org/img/wn/${res.weather[0].icon}.png`,
      description: res.weather[0].description,
      temp_max: Math.round(res.main.temp_max - 273.15),
      temp_min: Math.round(res.main.temp_min - 273.15),
    };
  };
}

export default WeatherService;
