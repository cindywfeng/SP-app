import React, { Component } from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Toolbar,
  Link as Link1,
} from "@material-ui/core";
import "./Login1.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

export class Register1 extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const newUser = {
      username,
      password,
      email,
    };
    this.props.register(newUser);
    console.log("submit");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
      <div className="window">
        <div className="blob">
          <svg
            className="blob1"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#D5E0EA"
              d="M37.7,-34C50,-25.4,61.8,-12.7,65,3.1C68.1,19,62.6,38,50.3,48C38,58,19,59,-0.8,59.9C-20.7,60.7,-41.3,61.4,-55.5,51.3C-69.7,41.3,-77.4,20.7,-78,-0.5C-78.5,-21.8,-71.9,-43.5,-57.7,-52.1C-43.5,-60.7,-21.8,-56.1,-4.5,-51.6C12.7,-47.1,25.4,-42.6,37.7,-34Z"
              transform="translate(100 100)"
            />
          </svg>

          <svg
            className="blob2"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#5B6884"
              d="M31.9,-41.5C42.4,-36.3,52.7,-28.4,58.3,-17.4C64,-6.5,65.1,7.5,60.8,19.4C56.5,31.3,46.8,41.2,35.7,49.8C24.7,58.5,12.3,66,-2.4,69.2C-17.1,72.5,-34.1,71.5,-44.8,62.7C-55.5,53.9,-59.8,37.4,-65.4,21C-71.1,4.7,-78,-11.5,-76.1,-27C-74.2,-42.6,-63.5,-57.6,-49.3,-61.5C-35.1,-65.5,-17.6,-58.4,-3.4,-53.6C10.7,-48.9,21.5,-46.6,31.9,-41.5Z"
              transform="translate(100 100)"
            />
          </svg>

          <svg
            className="blob3"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#98B6B8"
              d="M39.8,-36.1C49.6,-30.1,54,-15,50,-4C46,7,33.6,14.1,23.8,22.3C14.1,30.5,7,39.8,-3.2,43C-13.5,46.3,-27,43.4,-35.6,35.2C-44.3,27,-48.1,13.5,-48.5,-0.4C-48.8,-14.2,-45.8,-28.5,-37.1,-34.5C-28.5,-40.6,-14.2,-38.4,0.4,-38.8C15,-39.2,30.1,-42.1,39.8,-36.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <Grid container spacing={0} justify="center" direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className="login-form"
            >
              <Paper
                variant="elevation"
                elevation={2}
                className="login-background"
              >
                <Grid item>
                  <h1 className="title">Register</h1>
                </Grid>
                <Grid item>
                  <form onSubmit={this.onSubmit}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          className="text-field"
                          type="text"
                          placeholder="First Name"
                          fullWidth
                          name="username"
                          variant="outlined"
                          value={this.state.username}
                          onChange={this.onChange}
                          required
                          autoFocus
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          className="text-field"
                          type="email"
                          placeholder="Email"
                          fullWidth
                          name="email"
                          variant="outlined"
                          value={this.state.email}
                          onChange={this.onChange}
                          required
                          autoFocus
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          value={this.state.password}
                          onChange={this.onChange}
                          required
                        />
                      </Grid>
                      <Grid item className="submit-btn-container">
                        <button type="submit" className="submit-btn2">
                          Submit
                        </button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid>
                  <br />
                </Grid>
                <Grid item className="sub-text-container">
                  <a href="#" className="sub-text"></a>
                  <p className="sub-text">
                    Already have an account? <Link to="/login">Sign in</Link>
                  </p>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register1);
