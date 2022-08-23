import React from "react";
import { connect } from "react-redux";

const Account = props => {
  return (
    <div className="account mt-5">
      <h2>My Account</h2>
      <div className="card">
        <div className="card-body">
          {props.user && (
            <ul>
              <li>First name: {props.user.attributes.given_name}</li>
              <li>Last name: {props.user.attributes.family_name}</li>
              <li>Username: {props.user.username}</li>
              <li>Email: {props.user.attributes.email}</li>
              <li>
                <a
                  className="btn btn-primary btn-sm"
                  href="/changepassword"
                  role="button"
                >
                  change password
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Account);
