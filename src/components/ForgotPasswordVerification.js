import React, { Component } from "react";
import { Auth } from "aws-amplify";
import FormErrors from "./FormErrors";
import Validate from "../utility/FormValidation";

class ForgotPasswordVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verificationcode: "",
      email: "",
      newpassword: "",
      errors: {
        cognito: null,
        blankfield: false
      }
    };
  }

  clearState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  passwordVerificationHandler = async event => {
    event.preventDefault();

    // Form validation
    this.clearState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // Forgot password verify
    try {
      const data = await Auth.forgotPasswordSubmit(
        this.state.email,
        this.state.verificationcode,
        this.state.newpassword
      );
      console.log(data);
      this.props.history.push("/changepasswordconfirmation");
    } catch (error) {
      this.setState({
        errors: { ...this.state.errors, cognito: error }
      });
      console.log(error.message);
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("invalid");
  };

  render() {
    return (
      <div className="mt-5">
        <h2>Set new password</h2>
        <p>
          Please enter the verification code sent to your email address below,
          your email address and a new password.
        </p>
        <FormErrors formerrors={this.state.errors} />
        <form
          className="col-6 mt-4"
          onSubmit={this.passwordVerificationHandler}
        >
          <div className="form-group">
            <label htmlFor="verificationcode">Verification code</label>
            <input
              type="text"
              className="form-control"
              id="verificationcode"
              aria-describedby="verificationCodeHelp"
              placeholder="Enter verification code"
              value={this.state.verificationcode}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newpassword">New password</label>
            <input
              type="password"
              className="form-control"
              id="newpassword"
              placeholder="New password"
              value={this.state.newpassword}
              onChange={this.onInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ForgotPasswordVerification;
