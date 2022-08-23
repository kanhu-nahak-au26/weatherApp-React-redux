import React, { Component } from "react";
import FormErrors from "./FormErrors";

class Search extends Component {
  state = {
    searchquery: "",
    searchvalidationerror: false
  };

  validateForm = event => {
    if (!event.target[0].value) {
      event.target[0].classList.add("invalid");
      this.setState({ searchvalidationerror: true });
    } else {
      event.target[0].classList.remove("invalid");
      this.setState({ searchvalidationerror: false });
    }
  };

  handleClick = event => {
    event.preventDefault();
    this.validateForm(event);
    this.props.getWeather(this.state.searchquery);
  };

  onSearchChange = event => this.setState({ searchquery: event.target.value });

  render() {
    return (
      <React.Fragment>
        <form className="form-inline" onSubmit={this.handleClick}>
          <input
            type="text"
            className="form-control form-control-lg weather-search"
            placeholder="Enter search location (city or zip)"
            value={this.state.searchquery}
            onChange={this.onSearchChange}
          />
          <button type="submit" className="btn btn-primary btn-lg ml-3">
            get weather
          </button>
        </form>
        <FormErrors
          searchvalidationerror={this.state.searchvalidationerror}
          apierrors={this.props.apierrors}
        />
      </React.Fragment>
    );
  }
}

export default Search;
