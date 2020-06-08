import React from "react";
import "./App.css";
import DayForcast from "./DayForcast.js";
import FiveDayForcast from "./FiveDayForcast.json";
import CountrySelect from "./CountrySelect.js";
import CitySelect from "./CitySelect.js";

class App extends React.Component {
  
  state = {
    city: "",
    country: "",
  };

  onChangeCountry = (e) => {
    this.setState({ country: e.target.value });
  };

  onChangeCity = (e) => {
    console.log(`city: ${e.target.value}`)
    this.setState({ city: e.target.value });
  };

  render() {
    //let cities = City.filter((city) => (city.name.startsWith("Jers")))
    //console.log(cities);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-header-title">OpenWeatherApi</h1>
          <p className="App-header-menu">
            <a href="#0" className="App-header-report">
              5 Day Forcast
            </a>
            <a href="#0" className="App-header-report">
              Current Weather
            </a>
          </p>
        </header>
        <main className="App-main">
          <section id="App-section-config">
            <div className="App-section-config-entry">
              <label className="App-section-config-label">Country </label>
              <CountrySelect default="US" onChange={this.onChangeCountry} />
            </div>
            <div className="App-section-config-entry">
              <label className="App-section-config-label">City</label>
              <CitySelect country={this.state.country} onChange={this.onChangeCity} />
            </div>
          </section>
          <hr />
          <section id="five-day-forcast">
            <DayForcast
              id="day-0"
              day="FRI"
              forcast={FiveDayForcast.city.list[0]}
            ></DayForcast>
            <DayForcast
              id="day-1"
              day="SAT"
              forcast={FiveDayForcast.city.list[1]}
            ></DayForcast>
            <DayForcast
              id="day-2"
              day="SUN"
              forcast={FiveDayForcast.city.list[2]}
            ></DayForcast>
            <DayForcast
              id="day-3"
              day="MON"
              forcast={FiveDayForcast.city.list[3]}
            ></DayForcast>
            <DayForcast
              id="day-4"
              day="TUE"
              forcast={FiveDayForcast.city.list[4]}
            ></DayForcast>
          </section>
          <section id="current-weather">
            <DayForcast
              id="day-current"
              day="FRI"
              forcast={FiveDayForcast.city.list[2]}
            ></DayForcast>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
