import React, { Component } from "react";
import { Auth } from "aws-amplify";
import FormErrors from "./FormErrors";
import Validate from "../utility/FormValidation";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
      errors: {
        blankfield: false,
        passwordmatch: false
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

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // Change password submit
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      const changePasswordResponse = await Auth.changePassword(
        user,
        this.state.oldpassword,
        this.state.newpassword
      );
      console.log(changePasswordResponse);
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
        <h2>Change Password</h2>
        <FormErrors formerrors={this.state.errors} />
        <form className="col-6 mt-4" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="oldpassword">Old password</label>
            <input
              type="password"
              className="form-control"
              id="oldpassword"
              placeholder="Old password"
              value={this.state.oldpassword}
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
          <div className="form-group">
            <label htmlFor="passwordconfirm">Confirm password</label>
            <input
              type="password"
              className="form-control"
              id="confirmpassword"
              placeholder="Confirm password"
              value={this.state.confirmpassword}
              onChange={this.onInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default ChangePassword;
