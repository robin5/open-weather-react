// **********************************************************************************
// * Copyright (c) 2020 Robin Murray
// **********************************************************************************
// *
// * File: CountrySelect.js
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
import CountryCodes from "./CountryCodes.json";
import City from "./City.json";

class CountrySelect extends React.Component {

  findCountryName = (countryCode) => {
    for (let i = 0; i < CountryCodes.length; ++i){
      if (countryCode === CountryCodes[i].Code){
        return CountryCodes[i].Name;
      }
    }
    return "Unknown Country";
  };

  constructor(props) {
    super(props);

    // Get a set to of country codes from the given cities
    let countryCodes = new Set();
    City.map((city) => countryCodes.add(city.country));

    // Add country names to the country codes
    this.Countries = Array.from(countryCodes).map((countryCode) => ({
      Code: countryCode,
      Name: this.findCountryName(countryCode),
    }));
  }

/** Render CountrySelect component */
  render() {
    return (
      <select onChange={this.props.onChange} value={this.props.country}>
        {this.Countries.map((country, i) => (
          <option key={`country-${i}`} value={country.Code}>
            {country.Name}
          </option>
        ))}
      </select>
    );
  }
}

export default CountrySelect;
