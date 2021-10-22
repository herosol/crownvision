import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      formData: {
        username: null,
        password: null,
        remember: true,
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
        [name]: [type] == "checkbox" ? !formData[name] : value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.formData);
    //EMIT LOGIN ACTION
  };

  render() {
    return (
      <main className="common logon">
        <section id="login">
          <div className="contain">
            <div className="logBlk">
              <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>
                <p>Enter your details below</p>
                <div className="txtGrp">
                  <label htmlFor>User Name</label>
                  <input
                    type="text"
                    name="username"
                    className="txtBox"
                    onChange={this.handleChange}
                    value={this.state.username}
                  />
                </div>
                <div className="txtGrp pasDv">
                  <label htmlFor>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    className="txtBox"
                  />
                  <i className="icon-eye" id="eye" />
                </div>
                <div className="txtGrp flex">
                  <div className="lblBtn">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      onChange={this.handleChange}
                      defaultChecked
                    />
                    <label htmlFor="remember">Keep me logged in</label>
                  </div>
                  <a href="forgot-password.php" id="pass">
                    Forgot Password?
                  </a>
                </div>
                <div className="bTn text-center">
                  <button type="submit" className="webBtn yellowBtn longBtn">
                    Login
                  </button>
                </div>
              </form>
              <div className="haveAccount text-center">
                <span>Don’t have an account?</span>
                <Link to="/auth/register">Register</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
