import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="jumbotron text-center">
          <h1>Weather App</h1>
          <p className="lead tagline">
            Accurate weather reporting from around the globe
          </p>

          <div className="main-cta">
            <a
              className="btn btn-primary btn-lg"
              href="/register"
              role="button"
            >
              Sign up
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <h3>Real-time weather reports</h3>
            <p>
              Get the latest weather reports from anywhere around the globe.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Customizable dashboard</h3>
            <p>
              View the weather from your favorite locations in your own
              personalized dashboard.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Secure login</h3>
            <p>
              Our app features secure authentication and password encryption so
              your data is always safe.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
