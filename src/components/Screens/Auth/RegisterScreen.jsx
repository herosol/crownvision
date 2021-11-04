import React, { Component } from "react";
import { connect } from "react-redux";
import { register, clearUnexpected } from "../../../states/actions/authActions";

import SimpleReactValidator from "simple-react-validator";

import { setPageTitle } from "../../../utils/Helpers";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AUTH_MESSAGES, OFFLINE_ERROR } from "../../../utils/Messages";
import { TOAST_SETTINGS } from "../../../utils/SiteSettings";
import { EMPTY } from "../../../utils/Constants";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  processing: state.auth.processing,
  error: state.auth.error,
  offline: state.auth.offline,
  formValidationsError: state.auth.formValidationsError,
  formSuccess: state.auth.formSuccess,
});

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: EMPTY,
        lastName: EMPTY,
        email: EMPTY,
        password: EMPTY,
        cpassword: EMPTY,
        confirm: EMPTY,
      },
    };
    this.validator = new SimpleReactValidator();
    this.props.clearUnexpected();
  }

  handleInputChange = (event) => {
    this.props.clearUnexpected();
    const { name, value, type, checked } = event.target;
    this.setState(({ formData }) => ({
      formData: {
        ...formData,
        [name]: type == "checkbox" ? checked : value,
      },
    }));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.validator.allValid()) {
      this.props.register(this.state.formData);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  handleFormReset = () => {
    this.setState(({ formData }) => ({
      formData: {
        firstName: EMPTY,
        lastName: EMPTY,
        email: EMPTY,
        password: EMPTY,
        cpassword: EMPTY,
        confirm: EMPTY,
      },
    }));
  };

  render() {
    setPageTitle({ page_title: "Register", meta_description: "TEST" });

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
    }

    return (
      <main className="common logon">
        <ToastContainer />
        <section id="register">
          <div className="contain">
            <div className="logBlk">
              <form onSubmit={this.handleFormSubmit}>
                <h3>Register</h3>
                <p>Work Better, Live Better.</p>
                <div className="txtGrp">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="txtBox"
                    onChange={this.handleInputChange}
                    value={formData.firstName}
                  />
                  {this.validator.message(
                    "firstName",
                    formData.firstName,
                    "required|alpha|min:2|max:20",
                    { className: "validation-error" }
                  )}
                </div>
                <div className="txtGrp">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="txtBox"
                    onChange={this.handleInputChange}
                    value={formData.lastName}
                  />
                  {this.validator.message(
                    "lastName",
                    formData.lastName,
                    "required|alpha|min:2|max:20",
                    { className: "validation-error" }
                  )}
                </div>
                <div className="txtGrp">
                  <label htmlFor="">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    className="txtBox"
                    onChange={this.handleInputChange}
                    value={formData.email}
                  />
                  {this.validator.message(
                    "email",
                    formData.email,
                    "required|email",
                    { className: "validation-error" }
                  )}
                </div>
                <div className="txtGrp pasDv">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="txtBox"
                    onChange={this.handleInputChange}
                    value={formData.password}
                  />
                  <i className="icon-eye" id="eye" />
                  {this.validator.message(
                    "password",
                    formData.password,
                    "required|min:8|max:50",
                    { className: "validation-error" }
                  )}
                </div>
                <div className="txtGrp pasDv">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type="password"
                    name="cpassword"
                    className="txtBox"
                    onChange={this.handleInputChange}
                    value={formData.cpassword}
                  />
                  <i className="icon-eye" id="eye" />
                  {this.validator.message(
                    "cpassword",
                    formData.cpassword,
                    `required|in:${formData.password}`,
                    {
                      className: "validation-error",
                      messages: {
                        in: "Confirm password sould be same as password.",
                      },
                    }
                  )}
                </div>
                <div className="txtGrp flex">
                  <div className="lblBtn">
                    <input
                      type="checkbox"
                      name="confirm"
                      id="confirm"
                      onChange={this.handleInputChange}
                      value={formData.confirm}
                    />
                    <label htmlFor="confirm">
                      By signing up, I agree to Crown
                      <Link to="/terms-and-conditions">
                        Terms &amp; Conditions{" "}
                      </Link>{" "}
                      and <Link to="/privacy-policy">Privacy Policy.</Link>
                    </label>
                  </div>
                  {this.validator.message(
                    "confirm",
                    formData.confirm,
                    "required",
                    { className: "validation-error" }
                  )}
                </div>
                <div className="bTn text-center">
                  <button
                    type="submit"
                    className="webBtn yellowBtn longBtn"
                    disabled={processing}
                  >
                    Register
                    <i className={`spinner ${!processing && "hidden"}`}></i>
                  </button>
                </div>
              </form>
              <div className="haveAccount text-center">
                <span>Already have an account?</span>
                <Link to="/auth/enter">Login</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default connect(mapStateToProps, { register, clearUnexpected })(
  RegisterScreen
);
