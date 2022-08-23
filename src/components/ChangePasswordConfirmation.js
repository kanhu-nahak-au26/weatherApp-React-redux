import React, { Component } from "react";

class ChangePasswordConfirmation extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="jumbotron text-center">
          <p className="lead tagline mt-5">Your password has been updated.</p>
          <div className="main-cta mt-5">
            <a class="btn btn-primary btn-lg" href="/" role="button">
              get weather
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePasswordConfirmation;
