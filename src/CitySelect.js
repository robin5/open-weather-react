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
        <input type="text" list="browsers" name="browser" id="browser" />
        <datalist id="browsers">
          {this.state.cities.map((city, i) => (
            <option key={`city-${i}`} value={city.name}></option>
          ))}
        </datalist>
      </>
    );
  }
}

export default CountrySelect;
