import { Component } from "react";

import "./menuBar.scss";

class MenuBar extends Component {
  state = {
    city: "",
  };

  onValueChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onWeatherSearch(this.state.city);
    this.setState({
      city: "",
    });
  };

  render() {
    return (
      <div className="menu-bar">
        <h1 className="header-menu">Погода</h1>
        <form className="btn d-flex" onSubmit={this.onSubmit}>
          <input
            className="form-control"
            type="text"
            name="city"
            value={this.state.city}
            placeholder="Введите название города"
            // value="Санкт Петербург"
            onChange={this.onValueChange}
          />
          <button className="btn btn-light" type="submit">
            Поиск
          </button>
        </form>
      </div>
    );
  }
}

export default MenuBar;
