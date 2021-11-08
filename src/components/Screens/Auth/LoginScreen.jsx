import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login, clearUnexpected } from "../../../states/actions/authActions";

import SimpleReactValidator from "simple-react-validator";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AUTH_MESSAGES, OFFLINE_ERROR } from "../../../utils/Messages";
import { TOAST_SETTINGS } from "../../../utils/SiteSettings";
import { EMPTY } from "../../../utils/Constants";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: EMPTY,
        password: EMPTY,
        remember: true,
      },
    };
    this.validator = new SimpleReactValidator();
    this.props.clearUnexpected();
  }

  // componentDidMount = () => {
  //   console.log(this.state);
  // };

  handleInputChange = (event) => {
    const { name, value, type } = event.target;
    this.setState(({ formData }) => ({
      formData: {
        ...formData,
        [name]: [type] == "checkbox" ? !formData[name] : value,
      },
    }));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.validator.allValid()) {
      this.props.login(this.state.formData);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    const { formData } = this.state;
    let { processing, error, offline, formValidationsError, formSuccess } =
      this.props;
    {
      error && toast.error(AUTH_MESSAGES.REGISTER_FAILED, TOAST_SETTINGS);
    }

    {
      formValidationsError && toast.error(formValidationsError, TOAST_SETTINGS);
    }

    {
      offline && toast.error(OFFLINE_ERROR, TOAST_SETTINGS);
    }

    if (formSuccess) {
      toast.success(AUTH_MESSAGES.REGISTER_SUCCESS, TOAST_SETTINGS);
      // {
      //   this.handleFormReset();
      // }
      setTimeout(() => {
        window.location = "/client/dashboard";
      }, 2000);
    }

    return (
      <main className="common logon">
        <ToastContainer />
        <section id="login">
          <div className="contain">
            <div className="logBlk">
              <form onSubmit={this.handleFormSubmit}>
                <h3>Login</h3>
                <p>Enter your details below</p>
                <div className="txtGrp">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    className="txtBox"
                    onChange={this.handleInputChange}
                    value={this.state.email}
                  />
                  {this.validator.message(
                    "email",
                    formData.email,
                    "required|email",
                    {
                      className: "validation-error",
                      messages: {
                        required: "Please enter your email.",
                      },
                    }
                  )}
                </div>
                <div className="txtGrp pasDv">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleInputChange}
                    value={this.state.password}
                    className="txtBox"
                  />
                  {this.validator.message(
                    "password",
                    formData.password,
                    "required",
                    {
                      className: "validation-error",
                      messages: {
                        required: "Please enter your password.",
                      },
                    }
                  )}
                  <i className="icon-eye" id="eye" />
                </div>
                <div className="txtGrp flex">
                  <div className="lblBtn">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      onChange={this.handleInputChange}
                      defaultChecked
                    />
                    <label htmlFor="remember">Keep me logged in</label>
                  </div>
                  <a href="forgot-password.php" id="pass">
                    Forgot Password?
                  </a>
                </div>
                <div className="bTn text-center">
                  <button
                    type="submit"
                    className="webBtn yellowBtn longBtn"
                    disabled={processing}
                  >
                    Login
                    <i className={`spinner ${!processing && "hidden"}`}></i>
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

const mapStateToProps = (state) => ({
  authToken: state.auth.authToken,
  processing: state.auth.processing,
  error: state.auth.error,
  offline: state.auth.offline,
  formValidationsError: state.auth.formValidationsError,
  formSuccess: state.auth.formSuccess,
});

export default connect(mapStateToProps, { login, clearUnexpected })(
  LoginScreen
);
