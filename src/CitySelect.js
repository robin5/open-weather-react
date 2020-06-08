import React from "react";
import City from "./City.json";

class CountrySelect extends React.Component {
  state = { cities: [] };

  static getDerivedStateFromProps = (props, state) => {
    if (state.country !== props.country) {
      if (props.country === "") {
        return { cities: [] };
      } else {
        return {
          cities: City.filter((city) => city.country === props.country),
        };
      }
    }
    return null;
  };

  render() {
    return (
      <>
        <input
          type="text"
          list="Country-select-countries"
          onChange={this.props.onChange}
        />
        <datalist id="Country-select-countries">
          {this.state.cities.map((city, i) => (
            <option key={`city-${i}`} value={city.name}></option>
          ))}
        </datalist>
      </>
    );
  }
}

export default CountrySelect;
