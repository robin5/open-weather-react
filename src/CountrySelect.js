import React from "react";
import CountryCodes from "./CountryCodes.json";

class CountrySelect extends React.Component {
  render() {
    return (
      <select onChange={this.props.onChange}>
        <option key="country-default"> -- select a country --</option>
        {CountryCodes.map((country, i) => (
            <option key={`country-${i}`} value={country.Code}>
              {country.Name}
            </option>
        ))}
      </select>
    );
  }
}

export default CountrySelect;
