// **********************************************************************************
// * Copyright (c) 2020 Robin Murray
// **********************************************************************************
// *
// * File: CitySelect.js
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
import City from "./City.json";

class CitySelect extends React.Component {

  getCitiesOfCountry = (countryCode) => {
    return City.filter((city) => city.country === countryCode);
  };

  getCityFromId = (id) =>{
      return City.reduce((acc, city) => city.id == id ? acc + city.name : acc, "");
  }

  constructor(props) {
    super(props);

    this.state = {
      country: this.props.country,
      cities: this.getCitiesOfCountry(this.props.country),
      city: this.props.city,
      id: this.props.id,
    };
  }

  componentDidUpdate = (prevProps) => {
    // If country attribute has changed set to new list of cities
    if (this.props.country !== prevProps.country){

      // Obtain new list of cities
      let cities = this.getCitiesOfCountry(this.props.country);

      // Set state to new list of cities and select first city from list to display
      this.setState({
        country: this.props.country,
        cities: cities,
        city: cities[0].name,
        id: cities[0].id,
      });

      this.props.onChange({city: cities[0].name, id: cities[0].id})
    }
  }

  onChange = (e) => {

    let id = parseInt(e.target.value);
    let city = this.getCityFromId(e.target.value);
    let nextState = {city: city, id: id};
    console.log(nextState);
    this.props.onChange(nextState);
    this.setState(nextState);
  }

  render() {
    return (
      <select onChange={this.onChange} value={this.state.id}>
          {this.state.cities.map((city, i) => (
            <option key={`city-${i}`} value={city.id} name={city.name}>
              {city.name}
            </option>
          ))}
        </select>
    );
  }
}

export default CitySelect;
