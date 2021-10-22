import React, { Component } from "react";
import { register } from "../../../states/actions/authActions";

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      formData: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirm: false,
      },
      skeleton: {
        status: true,
        content: false,
      },
    };
  }

  componentDidMount = () => {
    console.log(this.state);
  };

  handleChange = (event) => {
    const { name, value, type } = event.target;
    this.setState(({ formData }) => ({
      formData: {
        ...formData,
        [name]: type == "checkbox" ? !formData[name] : value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // EMIT REGISTER ACTION
  };

  render() {
    return (
      <main className="common logon">
        <section id="register">
          <div className="contain">
            <div className="logBlk">
              <form onSubmit={this.handleSubmit}>
                <h3>Register</h3>
                <p>Work Better, Live Better.</p>
                <div className="txtGrp">
                  <label htmlFor>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="txtBox"
                    onChange={this.handleChange}
                    value={this.state.firstName}
                  />
                </div>
                <div className="txtGrp">
                  <label htmlFor>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="txtBox"
                    onChange={this.handleChange}
                    value={this.state.lastName}
                  />
                </div>
                <div className="txtGrp">
                  <label htmlFor>Email Address</label>
                  <input
                    type="text"
                    name="email"
                    className="txtBox"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                </div>
                <div className="txtGrp pasDv">
                  <label htmlFor>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="txtBox"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                  <i className="icon-eye" id="eye" />
                </div>
                <div className="txtGrp flex">
                  <div className="lblBtn">
                    <input
                      type="checkbox"
                      name="confirm"
                      id="confirm"
                      onChange={this.handleChange}
                      value={this.state.confirm}
                    />
                    <label htmlFor="confirm">
                      By signing up, I agree to Crown
                      <a href="terms-and-conditions.php">
                        Terms &amp; Conditions
                      </a>
                      and
                      <a href="privacy-policy.php">Privacy Policy.</a>
                    </label>
                  </div>
                </div>
                <div className="bTn text-center">
                  <button type="submit" className="webBtn yellowBtn longBtn">
                    Register
                  </button>
                </div>
              </form>
              <div className="haveAccount text-center">
                <span>Already have an account?</span>
                <a href="login.php">Login</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
