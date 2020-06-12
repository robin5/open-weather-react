// **********************************************************************************
// * Copyright (c) 2020 Robin Murray
// **********************************************************************************
// *
// * File: ConfigModal.js
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
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CountrySelect from "./CountrySelect.js";
import CitySelect from "./CitySelect.js";

class ConfigModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      handleClose: this.props.handleClose,
      handleSave: this.props.handleSave,
      country: this.props.config.country,
      city: this.props.config.city,
      id: this.props.config.id,
      units: this.props.config.units,
    };
  }

  onChangeCountry = (e) => {
    console.log("onChangeCountry");
    console.log(`country: ${e.target.value}`);
    this.setState({ country: e.target.value });
  };

  onChangeCity = (e) => {
    console.log("onChangeCity");
    console.log(e);
    this.setState({ city: e.city, id: e.id });
  };

  onChangeUnits = (e) => {
    console.log("onChangeUnits");
    console.log(`units: ${e.target.value}`);
    this.setState({ units: e.target.value });
  };

  onSaveChanges = () => {
    this.props.handleSave({ 
      id: this.state.id, 
      city: this.state.city, 
      country: this.state.country, 
      units: this.state.units });
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="App-section-config-entry">
            <label className="App-section-config-label">Country </label>
            <CountrySelect
              country={this.state.country}
              onChange={this.onChangeCountry}
            />
          </div>
          <div className="App-section-config-entry">
            <label className="App-section-config-label">City</label>
            <CitySelect
              country={this.state.country}
              city={this.state.city}
              id={this.state.id}
              onChange={this.onChangeCity}
            />
          </div>
          <div className="App-section-config-entry">
            <label className="App-section-config-label">Units </label>
            <select value={this.state.units} onChange={this.onChangeUnits}>
            <option value="Celsius">Celsius</option>
            <option value= "Fahrenheit">Fahrenheit</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.onSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ConfigModal;
