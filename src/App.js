// **********************************************************************************
// * Copyright (c) 2020 Robin Murray
// **********************************************************************************
// *
// * File: App.js
// *
// * Author: Robin Murray
// *
// **********************************************************************************
// *
// * Granting License: The MIT License (MIT)
// *
// *   Permission is hereby granted, free of charge, to any person obtaining a copy
// *   of this software and associated documentation files (the "Software"), to deal
// *   in the Software without restriction, including without limitation the rights
// *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// *   copies of the Software, and to permit persons to whom the Software is
// *   furnished to do so, subject to the following conditions:
// *   The above copyright notice and this permission notice shall be included in
// *   all copies or substantial portions of the Software.
// *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// *   THE SOFTWARE.
// *
// **********************************************************************************
import React from "react";
import "./App.css";
import DayForcast from "./DayForcast.js";
import FiveDayForcast from "./FiveDayForcast.json";
import ConfigModal from "./ConfigModal.js";

const DEFAULT_ID = 5128638;
const DEFAULT_CITY = "New York";
const DEFAULT_COUNTRY = "US";
const DEFAULT_UNITS = "Fahrenheit";

class App extends React.Component {
  state = {
    showConfigModal: false,
    data: [],
    loading: false,
    forcast: false,
  };

  /** Load default configuration */
  constructor() {
    super();

  // Load configuration from local storage
    let id = localStorage.getItem("id");
    let city = localStorage.getItem("city");
    let country = localStorage.getItem("country");
    let units = localStorage.getItem("units");

    // Set configuration if valid inputs
    if (Number.isInteger(id) && city && country && units) {
      this.state.config = { 
        id: Number(id), 
        city: city, 
        country: country, 
        units: units };
    } else {
      // Use default settings
      this.state.config = { 
        id: DEFAULT_ID, 
        city: DEFAULT_CITY, 
        country: DEFAULT_COUNTRY, 
        units: DEFAULT_UNITS };
    }
  }

  /** Fetch data from OpenWeatherApi */
  componentDidMount = () => {
    this.setState({ loading: true });
    this.fetchApiData();
  };

  fetchApiData = () => {
    fetch("https://hplussport.com/api/products/order/pric/sort/asc/qty/1")
      .then((data) => data.json())
      .then((data) => {
        console.log(data[0].name);
        this.setState({ data, loading: false });
      });
  }

  handleSettings = () => {
    this.setState({ showConfigModal: true });
  };

  handleShow = () => this.setState({ showConfigModal: true });

  handleClose = () => this.setState({ showConfigModal: false });

  handleSave = (config) => {
    console.log("handleSave")
    console.log(config)
    this.setState(
      { 
        showConfigModal: false,
        config: config,
        loading: true,
      });
      this.fetchApiData();
    }
  
    render() {
    //let cities = City.filter((city) => (city.name.startsWith("Jers")))
    //console.log(`loading: ${this.state.loading}`);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-header-title">OpenWeatherApi: {this.state.config.city}</h1>
          <div style={{ float: "left" }}>
            {this.state.loading ? (
              <span>loading...</span>
            ) : (
              null
            )}
          </div>
          <div className="App-header-menu">
            <a
              href="#0"
              className="App-header-report"
              onClick={this.handleSettings}
            >
              Settings
            </a>
          </div>
        </header>
        <main className="App-main">
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

        <ConfigModal
          show={this.state.showConfigModal}
          handleClose={this.handleClose}
          handleSave={this.handleSave}
          config={this.state.config}
        ></ConfigModal>
      </div>
    );
  }
}

export default App;
