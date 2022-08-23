import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import WeatherCard from "../components/WeatherCard";
import {
  addSavedLocation,
  deleteSavedLocation
} from "../actions/savedLocationActions";
import {
  setSearchedWeather,
  deleteSearchedWeather,
  setSavedWeather,
  deleteSavedWeather,
  saveWeatherLocation
} from "../actions/weatherActions";

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apierrors: false
    };
  }

  handleGetWeather = (searchQuery, fromSaved) => {
    if (!searchQuery) {
      return false;
    }

    const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    const apiKey = "6295194b0b73bbe3de34cd22e31ac159";
    const queryPrefix = /\d/.test(searchQuery) ? "?zip=" : "?q=";
    const requestUrl = `${baseUrl}${queryPrefix}${searchQuery}&appid=${apiKey}`;
    fetch(requestUrl)
      .then(response => {
        if (response.status !== 200) {
          this.setState({
            apierrors: `Location not found. Status Code: ${response.status}`
          });
          return;
        } else {
          this.setState({ apierrors: false });
        }
        response.json().then(data => {
          if (fromSaved) {
            this.props.setSavedWeather(data);
          } else {
            this.props.setSearchedWeather(data);
          }
        });
      })
      .catch(err => {
        console.log("Fetch Error :-S", err);
      });
  };

  handleSaveLocation = location => {
    // persist saved location for user in db
    // update state with new location for saved searches and clear current search
    this.props.addSavedLocation(location);
    this.props.saveWeatherLocation();
    this.props.deleteSearchedWeather();
  };

  handleRemoveLocation = (location, event) => {
    event.preventDefault();
    // remove location from saved locations in db
    // remove conditions for that locaton from state
    this.props.deleteSavedLocation(location);
    this.props.deleteSavedWeather(location);
  };

  componentWillMount() {
    // get user saved locations from db
  }

  componentDidMount() {
    // get weather for all user saved locations
    this.props.savedlocations.map(location =>
      this.handleGetWeather(location, true)
    );
  }

  render() {
    return (
      <div>
        <div className="mt-5">
          <div className="row justify-content-center">
            <Search
              getWeather={this.handleGetWeather}
              apierrors={this.state.apierrors}
            />
          </div>
        </div>
        <div className="mt-5">
          <WeatherCard
            key="0"
            weather={this.props.searchedweather}
            handleSaveLocation={this.handleSaveLocation}
            celsius={this.props.celsius}
          />
          {this.props.savedweather.map((condition, index) => {
            return (
              <WeatherCard
                key={index + 1}
                weather={condition}
                isSaved={true}
                handleRemoveLocation={this.handleRemoveLocation}
                celsius={this.props.celsius}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savedlocations: state.savedlocations.savedlocations,
  searchedweather: state.weather.searchedweather,
  savedweather: state.weather.savedweather,
  celsius: state.weather.celsius
});

export default connect(
  mapStateToProps,
  {
    addSavedLocation,
    deleteSavedLocation,
    setSearchedWeather,
    deleteSearchedWeather,
    setSavedWeather,
    deleteSavedWeather,
    saveWeatherLocation
  }
)(WeatherContainer);
