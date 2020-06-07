import React from "react";
import { render } from "react";
import "./DayForcast.css";

class DayForcast extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props.forcast);
    //console.log(props.forcast);
  }

  toCelsius = (kelvin) => (kelvin - 273.15).toFixed(0);
  getImgUrl = (icon) => ("http://openweathermap.org/img/w/" + icon + ".png");
  render = () => {
    return (
      <div className="day-wrapper">
        <div className="day-header">
          <span id="day-1">{this.props.day}</span>
        </div>
        <div className="day-report-wrapper">
          <img
            id="day-1-img"
            className="day-report-weather-icon"
            alt="weather-icon"
            src={this.getImgUrl(this.props.forcast.weather[0].icon)}
          />
          <span id="day-1-temp-high" className="day-report-temp">
            {this.toCelsius(this.props.forcast.main.temp_max)}
          </span>
          <span id="day-1-temp" className="day-report-temp">
            Now
          </span>
          <span id="day-1-temp-low" className="day-report-temp">
          {this.toCelsius(this.props.forcast.main.temp_min)}
          </span>
          <span id="day-1-humidity" className="day-report-measure">
            Humidity: {this.props.forcast.main.humidity}
          </span>
          <span id="day-1-pressure" className="day-report-measure">
            Pressure: {this.props.forcast.main.pressure}
          </span>
          <span id="day-1-wind" className="day-report-measure">
            Wind: {this.props.forcast.wind.speed} MPH
          </span>
        </div>
      </div>
    );
  };
}

export default DayForcast;
